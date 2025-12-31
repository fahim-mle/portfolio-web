
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
            {/* Background Image with Glow Effect */}
            <div className="fixed inset-0 z-[-1]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-glow"
                style={{
                  backgroundImage: `url('/midnight-forest.png')`,
                }}
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-background/80" />
            </div>

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
