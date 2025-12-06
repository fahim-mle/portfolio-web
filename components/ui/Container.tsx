import { ContainerProps, Container as RadixContainer } from '@radix-ui/themes';

interface Props extends ContainerProps {
  children: React.ReactNode;
}

export function Container({ children, ...props }: Props) {
  return (
    <RadixContainer size="3" px="4" {...props}>
      {children}
    </RadixContainer>
  );
}
