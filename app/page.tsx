'use client';

import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Grid, Heading, Inset, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Box py="9" style={{ backgroundColor: 'var(--gray-2)' }}>
        <Container size="3">
          <Flex direction="column" align="start" gap="5" style={{ maxWidth: 600 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="9" weight="bold" mb="4">
                Building digital experiences that matter.
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text size="5" color="gray" mb="6" as="p">
                I'm a software engineer specializing in building exceptional digital experiences.
                Currently focused on accessible, human-centered products.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Flex gap="4">
                <Link href="/projects">
                  <Button size="4" variant="solid" highContrast>
                    View Work <ArrowRightIcon />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="4" variant="outline" color="gray">
                    Contact Me
                  </Button>
                </Link>
              </Flex>
            </motion.div>
          </Flex>
        </Container>
      </Box>

      {/* Featured Section */}
      <Container size="3" py="9">
        <Heading size="6" mb="5">Featured Projects</Heading>
        <Grid columns={{ initial: '1', sm: '2' }} gap="5">
          {[1, 2].map((i) => (
            <Card key={i} size="2">
              <Inset clip="padding-box" side="top" pb="current">
                <Box
                  style={{
                    width: '100%',
                    height: 200,
                    backgroundColor: 'var(--gray-5)',
                  }}
                />
              </Inset>
              <Text as="p" size="3" weight="bold" mt="2">
                Project Name {i}
              </Text>
              <Text as="p" size="2" color="gray" mt="1">
                A brief description of the project and the technologies used to build it.
              </Text>
            </Card>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
