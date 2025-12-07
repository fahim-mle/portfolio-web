'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-muted/50">
        <Container>
          <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                Building digital experiences that matter.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl text-muted-foreground mb-6">
                I'm a software engineer specializing in building exceptional digital experiences.
                Currently focused on accessible, human-centered products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex gap-4 justify-center">
                <Link href="/projects">
                  <Button size="lg">
                    View Work <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Section */}
      <section className="py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full h-48 bg-muted" />
                <CardHeader>
                  <CardTitle>Project Name {i}</CardTitle>
                  <CardDescription>
                    A brief description of the project and the technologies used to build it.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
