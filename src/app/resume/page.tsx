import { ResumeView } from '@/components/resume/resume-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | mindinroot',
  description: 'Fahim Forhad — Professional Journey & Resume.',
};

export default function ResumePage() {
  return <ResumeView />;
}
