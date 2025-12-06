import { Container } from '@/components/ui/Container';
import { Box, Flex, Heading, Separator, Text } from '@radix-ui/themes';

export default function About() {
  return (
    <Container py="9">
      <Flex direction="column" gap="6">
        <Heading size="8">About Me</Heading>

        <Box>
          <Text size="5" color="gray" as="p" mb="4">
            Hello! I'm Ghost, a software engineer based in the cloud. I enjoy creating things that live on the internet.
            My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
          </Text>

          <Text size="5" color="gray" as="p">
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.
          </Text>
        </Box>

        <Separator size="4" />

        <Heading size="6">Skills</Heading>
        <Flex gap="4" wrap="wrap">
          {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Radix UI'].map((skill) => (
            <Box key={skill} px="3" py="1" style={{ border: '1px solid var(--gray-a5)', borderRadius: 'var(--radius-3)' }}>
              <Text size="2">{skill}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
