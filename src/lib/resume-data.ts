export interface Milestone {
  id: string;
  year: string;
  title: string;
  subtitle: string; // Company or context
  description: string;
  tech?: string[];
  type: 'work' | 'life' | 'education';
}

export const JOURNEY: Milestone[] = [
  {
    id: 'now',
    year: 'Now',
    title: 'Building & Thinking',
    subtitle: 'Brisbane, AU',
    description:
      'I’m looking for the next problem. I want to build systems that respect user privacy and actually work. I’m also diving deep into economics—understanding why the world works the way it does.',
    type: 'life',
  },
  {
    id: 'qcif',
    year: '2025',
    title: 'ML Security Engineer',
    subtitle: 'QCIF',
    description:
      'The problem: How do you train AI on data you can’t see? I built a secure environment using mTLS and VPNs so we could do Federated Learning without moving the raw data.',
    tech: ['Docker', 'mTLS', 'Keycloak', 'Python'],
    type: 'work',
  },
  {
    id: 'sarina-russo',
    year: '2025',
    title: 'Data Engineer',
    subtitle: 'Sarina Russo Group',
    description:
      'I built a pipeline to predict which students might drop out. It replaced manual spreadsheets with a real dashboard that helped staff act fast.',
    tech: ['Python', 'Power BI', 'Analytics'],
    type: 'work',
  },
  {
    id: 'masters',
    year: '2024-25',
    title: 'Masters in Data Science',
    subtitle: 'James Cook University',
    description:
      'I already knew how to build software. I went back to school to learn how to measure it properly—statistics, mining, and the math behind the models.',
    type: 'education',
  },
  {
    id: 'move',
    year: '2024',
    title: 'Moving to Australia',
    subtitle: 'Life Change',
    description:
      'Left my comfort zone in Dhaka. Moving continents taught me more about adaptability than any code framework ever could.',
    type: 'life',
  },
  {
    id: 'gain',
    year: '2021-23',
    title: 'Frontend Team Lead',
    subtitle: 'Gain Solutions',
    description:
      'We had a platform with 100K+ users that was too slow. I led the team to fix it—cutting load times in half. This is where I learned that performance is a feature.',
    tech: ['React', 'Next.js', 'Performance'],
    type: 'work',
  },
  {
    id: 'ideaxen',
    year: '2020',
    title: 'Software Developer',
    subtitle: 'Ideaxen',
    description:
      'My start. I built ERP modules. It wasn’t flashy, but it taught me that business logic and data integrity are the backbone of everything.',
    tech: ['C#', '.NET', 'SQL'],
    type: 'work',
  },
  {
    id: 'realization',
    year: '2020',
    title: 'The Realization',
    subtitle: 'Dhaka',
    description:
      'I realized code is just a tool. The real systems that control our lives are economic and social. I decided I needed to understand both.',
    type: 'life',
  }
];
