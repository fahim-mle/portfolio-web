import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Box, Flex, Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="indigo" grayColor="slate" radius="medium">
          <Flex direction="column" style={{ minHeight: '100vh' }}>
            <Navbar />
            <Box flexGrow="1">
              {children}
            </Box>
            <Footer />
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
