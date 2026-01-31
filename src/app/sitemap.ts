import { getSortedPostsData } from '@/lib/blog';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mindinroot.com';
  const posts = getSortedPostsData();

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const routes = [
    '',
    '/about',
    '/projects',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...blogPosts];
}
