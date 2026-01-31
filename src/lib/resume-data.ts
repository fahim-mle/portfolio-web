export interface Milestone {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
  type: 'work' | 'education';
}

export const JOURNEY: Milestone[] = [
  {
    id: 'qcif',
    period: 'Sep 2025 – Dec 2025',
    title: 'Software Engineer (ML Security)',
    company: 'QCIF (Queensland Cyber Infrastructure)',
    location: 'Brisbane, AU',
    description:
      'Where systems meet security. I architected a secure, containerised federated learning environment. The challenge: enabling ML training without moving the data. The solution: mTLS, OpenVPN, and Keycloak for identity.',
    skills: ['Docker', 'mTLS', 'Keycloak', 'Federated Learning', 'Python'],
    type: 'work',
  },
  {
    id: 'sarina-russo',
    period: 'May 2025 – Aug 2025',
    title: 'Software Engineer (Data & Analytics)',
    company: 'Sarina Russo Group',
    location: 'Brisbane, AU',
    description:
      'Built the predictive pipeline to identify at-risk students. This wasn’t just code; it was about stakeholder enablement—replacing spreadsheets with automated Power BI dashboards that drove real operational decisions.',
    skills: ['Python', 'Power BI', 'Predictive Modeling', 'Analytics'],
    type: 'work',
  },
  {
    id: 'masters',
    period: 'Mar 2024 – Dec 2025',
    title: 'Master of Data Science (Professional)',
    company: 'James Cook University',
    location: 'Brisbane, AU',
    description:
      'Deepening the "Signal" side of my "Systems & Signals" philosophy. Focused on Data Mining, Machine Learning, and Statistical Modeling to complement my engineering background.',
    skills: ['Data Mining', 'Statistics', 'Research'],
    type: 'education',
  },
  {
    id: 'gain-solutions',
    period: 'Sep 2021 – Nov 2023',
    title: 'Frontend Team Lead',
    company: 'Gain Solutions',
    location: 'Dhaka, Bangladesh',
    description:
      'Leadership and scale. Led the frontend for Uniteliving.no (100K+ users). My focus was performance: cutting render times from 7s to 1.3s and optimizing the dashboard load by 50%. Mentored a team of 4.',
    skills: ['React', 'Performance', 'Team Leadership', 'Next.js'],
    type: 'work',
  },
  {
    id: 'ideaxen',
    period: 'Aug 2020 – Jul 2021',
    title: 'Junior Software Developer',
    company: 'Ideaxen',
    location: 'Dhaka, Bangladesh',
    description:
      'The foundation. Built core modules for ERP systems using C# .NET. Learned the importance of data integrity and business logic in complex inventory management.',
    skills: ['C#', '.NET', 'SQL', 'ERP'],
    type: 'work',
  },
];
