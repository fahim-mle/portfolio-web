import { Box, Container, Flex, Text } from '@radix-ui/themes';

export function Footer() {
  return (
    <Box py="6" style={{ borderTop: '1px solid var(--gray-a4)', marginTop: 'auto' }}>
      <Container size="3">
        <Flex justify="center" align="center">
          <Text size="2" color="gray">
            © {new Date().getFullYear()} Ghost. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
