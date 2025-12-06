import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <Container className="py-24">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Blog</h1>
      <div className="flex flex-col gap-4 max-w-3xl">
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
