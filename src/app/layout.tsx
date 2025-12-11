
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import "highlight.js/styles/github-dark.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexSerif.variable} min-h-screen bg-background text-foreground antialiased font-sans selection:bg-accent selection:text-accent-foreground`} suppressHydrationWarning>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
