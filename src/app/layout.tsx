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
    default: "Ciercle LLC",
    template: "%s | Ciercle LLC",
  },
  description:
    "Ciercle LLC - Engineering the world's most refined digital products. Web, mobile, and AI solutions.",
  metadataBase: new URL("https://cierclellc.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cierclellc.com",
    siteName: "Ciercle LLC",
    title: "Ciercle LLC - Engineering Refined Digital Products",
    description:
      "Full-stack development studio building web, mobile, and AI solutions. 8+ years of experience, 53+ apps shipped.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciercle LLC - Engineering Refined Digital Products",
    description:
      "Full-stack development studio building web, mobile, and AI solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
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
