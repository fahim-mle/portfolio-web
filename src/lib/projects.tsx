import { RocketIcon, CodeIcon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import React from 'react';

export interface Project {
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    href: string;
    github?: string;
    icon: React.ReactNode;
    highlights: string[];
}

export const PROJECTS: Project[] = [
    {
        slug: 'federated-learning-secure',
        title: 'Federated Learning — Secure Implementation',
        description: 'Designed a containerised federated learning environment with privacy-preserving communication.',
        fullDescription: 'A robust implementation of federated learning focusing on security and privacy. This project involved setting up a multi-node environment where data remains local while models are trained globally.',
        tags: ['Python', 'Docker', 'Federated Learning', 'Security'],
        href: 'https://github.com/fahim-mle/federated_learning_secure_implementation',
        github: 'https://github.com/fahim-mle/federated_learning_secure_implementation',
        icon: React.createElement(RocketIcon, { className: "h-5 w-5" }),
        highlights: [
            'Implemented mTLS for secure node communication',
            'Integrated Keycloak for OIDC authentication',
            'Reduced communication overhead by 30% through gradient compression'
        ]
    },
    {
        slug: 'wellbeing-ecommerce',
        title: 'Wellbeing E‑commerce (Showcase)',
        description: 'A practical full‑stack build to demonstrate product thinking and reliable engineering practices.',
        fullDescription: 'A modern e-commerce platform built with performance and user experience in mind. Features include real-time inventory tracking and a seamless checkout flow.',
        tags: ['TypeScript', 'Next.js', 'CI/CD', 'Docker'],
        href: 'https://github.com/fahim-mle/welbeing_ecommerce',
        github: 'https://github.com/fahim-mle/welbeing_ecommerce',
        icon: React.createElement(CodeIcon, { className: "h-5 w-5" }),
        highlights: [
            'Built with Next.js App Router for optimal performance',
            'Automated testing pipeline with GitHub Actions',
            'Containerized deployment for consistent environments'
        ]
    },
    {
        slug: 'portfolio-v2',
        title: 'Portfolio Website (This Site)',
        description: 'A clean Next.js portfolio with a blog — designed to evolve into deeper write-ups and case studies.',
        fullDescription: 'My personal portfolio and blog, built to showcase my transition from full-stack engineer to data scientist. Focuses on clean typography and smooth interactions.',
        tags: ['Next.js', 'TypeScript', 'UI', 'Vercel'],
        href: '/',
        github: 'https://github.com/fahim-mle/portfolio-web',
        icon: React.createElement(MixerHorizontalIcon, { className: "h-5 w-5" }),
        highlights: [
            '95+ Lighthouse performance score',
            'System-aware dark mode implementation',
            'Content-driven blog using MDX'
        ]
    }
];
