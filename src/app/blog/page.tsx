import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';

import { auth } from '@/lib/better-auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function BlogIndex() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/login');
  }

  const allPostsData = getSortedPostsData();

  return (
    <Container className="py-24">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 text-center">Blog</h1>
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <Link key={id} href={`/blog/${id}`} className="no-underline">
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
