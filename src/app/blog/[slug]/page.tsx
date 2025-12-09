import { Container } from '@/components/ui/container';
import { auth } from '@/lib/better-auth';
import { getAllPostIds, getPostData } from '@/lib/blog';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => path.params);
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/login');
  }

  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <Container className="py-24 max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">{postData.title}</h1>
        <p className="text-xl text-muted-foreground">{postData.date}</p>
      </div>

      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
      />
    </Container>
  );
}
