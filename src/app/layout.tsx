import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#070812",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shyamsivadasan.dev"),
  title: "Shyam Sivadasan Nair | Computer Science Engineering Student & Developer",
  description:
    "Explore the portfolio of Shyam Sivadasan Nair, a Computer Science Engineering student showcasing software projects, technical skills, development journey and interests.",
  keywords: [
    "Shyam Sivadasan Nair",
    "Computer Science Engineering",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Campus Eats",
    "L'Horizon Azure",
    "FDR MITRA",
    "Software Engineer Portfolio",
    "India"
  ],
  authors: [{ name: "Shyam Sivadasan Nair" }],
  creator: "Shyam Sivadasan Nair",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shyamsivadasan.dev",
    siteName: "Shyam Sivadasan Nair Developer Portfolio",
    title: "Shyam Sivadasan Nair | Computer Science Engineering Student & Developer",
    description:
      "Turning Curiosity Into Code. Turning Ideas Into Reality. Explore full-stack applications, technical projects, and engineering journey.",
    images: [
      {
        url: "/images/projects/l-horizon-azure/cover.svg",
        width: 1200,
        height: 675,
        alt: "Shyam Sivadasan Nair Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyam Sivadasan Nair | Computer Science Engineering Student & Developer",
    description:
      "Turning Curiosity Into Code. Turning Ideas Into Reality. Explore software projects, skills and development journey.",
    images: ["/images/projects/l-horizon-azure/cover.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shyam Sivadasan Nair",
    jobTitle: "Computer Science Engineering Student & Software Developer",
    description:
      "Second-year Computer Science Engineering student passionate about full-stack web development, software engineering, and emerging technologies.",
    nationality: "Indian",
    email: "mailto:shyamnair181107@gmail.com",
    sameAs: [
      "https://github.com/shyamnair181107-hue",
      "https://www.linkedin.com/in/shyam-nair-9b9090423"
    ],
    knowsAbout: [
      "Computer Science Engineering",
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary antialiased selection:bg-accent-violet/30 selection:text-accent-cyan">
        <ScrollProgress />
        <CustomCursor />
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
