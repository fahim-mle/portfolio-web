import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <Container className="py-24 max-w-md">
      <div className="flex flex-col gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Get in Touch</h1>
          <p className="text-muted-foreground">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <form className="w-full space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Textarea placeholder="Message" className="min-h-[150px]" />
          <Button className="w-full" size="lg">Send Message</Button>
        </form>
      </div>
    </Container>
  );
}
