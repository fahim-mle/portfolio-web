import { useSyncExternalStore } from 'react';

type Size = { width: number; height: number };

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const handler = () => callback();
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}

function getSnapshot(): string {
  return `${window.innerWidth}x${window.innerHeight}`;
}

const SERVER_SNAPSHOT = '0x0';
function getServerSnapshot(): string {
  return SERVER_SNAPSHOT;
}

export function useWindowSize(): Size {
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [w, h] = value.split('x');
  return { width: Number(w) || 0, height: Number(h) || 0 };
}
