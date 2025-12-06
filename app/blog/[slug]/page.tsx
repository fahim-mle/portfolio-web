import { getAllPostIds, getPostData } from '@/lib/blog';
import { Box, Container, Heading, Text } from '@radix-ui/themes';
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
    <Container size="3" py="9">
      <Box mb="6">
        <Heading size="8" mb="2">{postData.title}</Heading>
        <Text size="3" color="gray">{postData.date}</Text>
      </Box>

      <Box
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
        style={{ maxWidth: 'none', color: 'var(--gray-12)' }}
      />
    </Container>
  );
}
