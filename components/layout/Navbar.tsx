'use client';

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Box, Button, Container, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <Box style={{ borderBottom: '1px solid var(--gray-a4)', position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--color-background)', backdropFilter: 'blur(10px)' }}>
      <Container size="3">
        <Flex justify="between" align="center" py="4" px="4">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Text size="5" weight="bold" style={{ letterSpacing: '-0.02em' }}>
              Ghost.
            </Text>
          </Link>

          <Flex gap="5" display={{ initial: 'none', sm: 'flex' }}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <Text
                  size="2"
                  weight="medium"
                  color={pathname === item.href ? 'indigo' : 'gray'}
                  style={{ transition: 'color 0.2s' }}
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </Flex>

          <Flex gap="3" align="center">
            <Button variant="ghost" color="gray">
              <GitHubLogoIcon width="18" height="18" />
            </Button>
            <Button variant="ghost" color="gray">
              <LinkedInLogoIcon width="18" height="18" />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
