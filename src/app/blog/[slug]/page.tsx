import { Container } from '@/components/ui/container';
import { getAllPostIds, getPostData } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => path.params);
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <Container className="py-24 max-w-3xl mx-auto">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-8 group"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to all posts
      </Link>

      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-4 text-foreground leading-tight">
          {postData.title}
        </h1>
        <time className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
          {postData.date}
        </time>
      </div>

      <article
        className="prose prose-zinc dark:prose-invert prose-lg max-w-none
                   prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight 
                   prose-p:leading-relaxed prose-p:text-muted-foreground
                   prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                   prose-blockquote:border-l-accent prose-blockquote:bg-secondary/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                   prose-code:text-accent prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
      />
    </Container>
  );
}
