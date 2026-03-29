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
        slug: 'career-scout-platform',
        title: 'Career Scout Platform',
        description: 'A full-stack career tracker with a FastAPI backend, PostgreSQL, and React UI.',
        fullDescription: 'A career scouting platform built to manage opportunities, notes, and momentum, backed by FastAPI and PostgreSQL with Prometheus and Grafana for monitoring.',
        tags: ['TypeScript', 'React', 'FastAPI', 'PostgreSQL', 'Prometheus', 'Grafana'],
        href: 'https://github.com/fahim-mle/career-scout-platform',
        github: 'https://github.com/fahim-mle/career-scout-platform',
        icon: React.createElement(MixerHorizontalIcon, { className: "h-5 w-5" }),
        highlights: [
            'FastAPI backend with PostgreSQL for reliable data storage',
            'Prometheus + Grafana monitoring for operational visibility',
            'TypeScript + React frontend focused on daily momentum'
        ]
    }
];
