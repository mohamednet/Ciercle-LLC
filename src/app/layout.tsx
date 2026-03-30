import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Ciercle LLC | Web, Mobile & AI Development Agency",
    template: "%s | Ciercle LLC",
  },
  description:
    "Ciercle LLC is a full-stack development agency specializing in web apps, mobile apps, AI integration, and cloud solutions. 53+ apps shipped. Based in Wyoming, USA.",
  keywords: [
    "web development agency",
    "mobile app development",
    "AI integration",
    "full-stack development",
    "React development",
    "Next.js development",
    "Flutter app development",
    "cloud infrastructure",
    "software development company",
    "Ciercle LLC",
    "Wyoming tech company",
  ],
  metadataBase: new URL("https://cierclellc.com"),
  alternates: {
    canonical: "https://cierclellc.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cierclellc.com",
    siteName: "Ciercle LLC",
    title: "Ciercle LLC | Web, Mobile & AI Development Agency",
    description:
      "Full-stack development studio building web, mobile, and AI solutions. 53+ apps shipped. Based in Wyoming, USA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciercle LLC | Web, Mobile & AI Development Agency",
    description:
      "Full-stack development studio building web, mobile, and AI solutions. 53+ apps shipped.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ciercle LLC",
  url: "https://cierclellc.com",
  logo: "https://cierclellc.com/icon.png",
  description:
    "Full-stack development agency specializing in web apps, mobile apps, AI integration, and cloud solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@cierclellc.com",
    contactType: "customer service",
  },
  foundingDate: "2026-03",
  areaServed: "Worldwide",
  serviceType: [
    "Web Application Development",
    "Mobile App Development",
    "AI Integration",
    "Cloud & Backend Development",
    "UI/UX Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-display antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
