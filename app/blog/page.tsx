import { getSortedPostsData } from '@/lib/blog';
import { Card, Container, Flex, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <Container size="3" py="9">
      <Heading size="8" mb="6">Blog</Heading>
      <Flex direction="column" gap="4">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <Link key={id} href={`/blog/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card size="2" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
              <Flex direction="column" gap="2">
                <Heading size="5">{title}</Heading>
                <Text size="2" color="gray">{date}</Text>
                <Text size="3">{excerpt}</Text>
              </Flex>
            </Card>
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
