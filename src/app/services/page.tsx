import { Metadata } from "next";
import { Suspense } from "react";
import ServiceTabs from "@/components/ServiceTabs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end development services from Ciercle LLC — mobile apps, web platforms, AI integration, and cloud infrastructure. Built with React, Flutter, Next.js, and more.",
  alternates: { canonical: "https://cierclellc.com/services" },
  openGraph: {
    title: "Our Services | Ciercle LLC",
    description:
      "Mobile apps, web platforms, AI integration, and cloud infrastructure. Full-stack development services for businesses of all sizes.",
    url: "https://cierclellc.com/services",
  },
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
          Our Services
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          End-to-end development services — from mobile apps and web platforms
          to AI integration and cloud infrastructure.
        </p>
      </section>

      {/* Service Tabs */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <Suspense fallback={null}>
          <ServiceTabs />
        </Suspense>
      </section>
    </div>
  );
}
