import { Button, Container, Flex, Heading, Text, TextArea, TextField } from '@radix-ui/themes';

export default function Contact() {
  return (
    <Container size="2" py="9">
      <Flex direction="column" gap="6">
        <Heading size="8" align="center">Get in Touch</Heading>
        <Text size="4" color="gray" align="center" as="p">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Text>

        <form style={{ width: '100%' }}>
          <Flex direction="column" gap="4">
            <TextField.Root placeholder="Name" size="3" />
            <TextField.Root placeholder="Email" size="3" />
            <TextArea placeholder="Message" size="3" style={{ minHeight: 150 }} />
            <Button size="3" variant="solid" highContrast>Send Message</Button>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
}
