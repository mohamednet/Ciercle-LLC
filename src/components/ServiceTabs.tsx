"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "mobile",
    icon: "phone_iphone",
    label: "Mobile Apps",
    color: "bg-blue-500",
    title: "Mobile App Development",
    subtitle: "iOS & Android apps that users love",
    description:
      "We design and build high-performance mobile applications for both iOS and Android platforms. Whether you need a native app or a cross-platform solution, we deliver polished products ready for the App Store and Google Play.",
    features: [
      {
        icon: "flutter_dash",
        title: "Cross-Platform Development",
        text: "Build once, deploy everywhere. We use Flutter and React Native to create apps that feel native on both iOS and Android, saving you time and budget without compromising quality.",
      },
      {
        icon: "design_services",
        title: "UI/UX Design",
        text: "Every app starts with a beautiful, intuitive design. We create interactive prototypes and pixel-perfect interfaces that follow platform-specific design guidelines (Material Design & Human Interface Guidelines).",
      },
      {
        icon: "api",
        title: "Backend & API Integration",
        text: "We build robust backends with real-time data sync, push notifications, authentication, payment processing, and third-party API integrations to power your app.",
      },
      {
        icon: "store",
        title: "App Store Submission",
        text: "We handle the entire submission process — app store optimization (ASO), screenshots, descriptions, review compliance, and ongoing updates to keep your app approved and ranked.",
      },
      {
        icon: "analytics",
        title: "Analytics & Monitoring",
        text: "Built-in analytics, crash reporting, and performance monitoring so you understand how users interact with your app and can make data-driven improvements.",
      },
      {
        icon: "update",
        title: "Maintenance & Updates",
        text: "Apps need ongoing care. We provide continuous maintenance, OS compatibility updates, feature additions, and bug fixes to keep your app running smoothly.",
      },
    ],
    tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
  },
  {
    id: "web",
    icon: "web",
    label: "Web Development",
    color: "bg-purple-500",
    title: "Web Development",
    subtitle: "Modern web platforms built to scale",
    description:
      "From marketing websites to complex SaaS platforms and admin dashboards, we build fast, responsive, and SEO-optimized web applications using the latest technologies.",
    features: [
      {
        icon: "dashboard",
        title: "Full-Stack Web Apps",
        text: "We build complete web applications with modern frameworks — from interactive frontends to scalable backends, databases, authentication, and deployment infrastructure.",
      },
      {
        icon: "speed",
        title: "Performance Optimized",
        text: "Server-side rendering, static generation, code splitting, image optimization, and caching strategies to ensure your site loads fast and ranks well on search engines.",
      },
      {
        icon: "devices",
        title: "Responsive Design",
        text: "Every page looks and works perfectly across all devices — desktop, tablet, and mobile. We follow a mobile-first approach to ensure the best experience everywhere.",
      },
      {
        icon: "admin_panel_settings",
        title: "Admin Dashboards",
        text: "Custom admin panels with data visualization, user management, role-based access control, reporting tools, and real-time analytics tailored to your business needs.",
      },
      {
        icon: "shopping_cart",
        title: "E-Commerce Solutions",
        text: "Online stores with product catalogs, shopping carts, secure payment processing, inventory management, and order tracking — built for conversion.",
      },
      {
        icon: "search",
        title: "SEO & Analytics",
        text: "Built-in SEO best practices, structured data, sitemap generation, meta tag management, and Google Analytics integration to drive organic traffic to your site.",
      },
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    id: "ai",
    icon: "auto_awesome",
    label: "AI Integration",
    color: "bg-emerald-500",
    title: "AI Integration",
    subtitle: "Smart features powered by machine learning",
    description:
      "We integrate artificial intelligence into your existing products or build AI-first applications. From chatbots and recommendation engines to computer vision and NLP — we make AI practical and accessible.",
    features: [
      {
        icon: "smart_toy",
        title: "Chatbots & Assistants",
        text: "Custom AI chatbots powered by GPT, Claude, or open-source models. Integrated into your app or website for customer support, lead generation, or in-app assistance.",
      },
      {
        icon: "recommend",
        title: "Recommendation Engines",
        text: "Personalized content, product, or action recommendations based on user behavior, preferences, and machine learning models tailored to your business logic.",
      },
      {
        icon: "image_search",
        title: "Computer Vision",
        text: "Image recognition, object detection, OCR, and visual search capabilities. Process photos, scan documents, or analyze visual data within your applications.",
      },
      {
        icon: "translate",
        title: "Natural Language Processing",
        text: "Text analysis, sentiment detection, language translation, content summarization, and intelligent search powered by state-of-the-art NLP models.",
      },
      {
        icon: "model_training",
        title: "Custom Model Training",
        text: "Fine-tune existing models or train custom ones on your data. We handle data preparation, model selection, training, evaluation, and deployment.",
      },
      {
        icon: "bolt",
        title: "AI API Development",
        text: "Build scalable APIs that serve AI predictions in real-time. We design inference pipelines that are fast, reliable, and cost-effective at any scale.",
      },
    ],
    tech: ["OpenAI", "LangChain", "TensorFlow", "Python", "FastAPI", "Vector DBs"],
  },
  {
    id: "cloud",
    icon: "cloud",
    label: "Cloud & Backend",
    color: "bg-orange-500",
    title: "Cloud & Backend",
    subtitle: "Scalable infrastructure that grows with you",
    description:
      "We architect and build the backend systems that power your applications — APIs, databases, cloud infrastructure, CI/CD pipelines, and DevOps workflows designed for reliability and scale.",
    features: [
      {
        icon: "dns",
        title: "API Development",
        text: "RESTful and GraphQL APIs built with security, documentation, rate limiting, and versioning. Clean endpoints that your frontend and mobile teams will love working with.",
      },
      {
        icon: "storage",
        title: "Database Design",
        text: "Optimal database architecture — relational (PostgreSQL, MySQL), document (MongoDB), key-value (Redis), or a combination. We design schemas that perform at scale.",
      },
      {
        icon: "cloud_upload",
        title: "Cloud Infrastructure",
        text: "Deploy on AWS, Google Cloud, or Azure. We set up auto-scaling, load balancing, CDN, SSL, and monitoring to keep your application fast and available 24/7.",
      },
      {
        icon: "sync",
        title: "CI/CD Pipelines",
        text: "Automated testing, building, and deployment pipelines. Push code and it goes live — safely. We use GitHub Actions, Docker, and Kubernetes for seamless workflows.",
      },
      {
        icon: "security",
        title: "Security & Compliance",
        text: "Authentication (OAuth, JWT, SSO), encryption at rest and in transit, security audits, penetration testing, and compliance with GDPR, SOC 2, and HIPAA requirements.",
      },
      {
        icon: "query_stats",
        title: "Monitoring & Observability",
        text: "Real-time monitoring, alerting, log aggregation, and performance tracking. Know exactly what's happening in your system and catch issues before users do.",
      },
    ],
    tech: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Redis"],
  },
];

export default function ServiceTabs() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("mobile");

  useEffect(() => {
    if (tabParam && services.some((s) => s.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const active = services.find((s) => s.id === activeTab)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all ${
              activeTab === service.id
                ? "bg-primary text-white shadow-md"
                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600"
            }`}
          >
            <span className="material-icons text-xl">{service.icon}</span>
            {service.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Service Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div
              className={`w-16 h-16 ${active.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
            >
              <span className="material-icons text-white text-3xl">
                {active.icon}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-4">
              {active.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {active.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {active.features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                    <span className="material-icons text-gray-700 dark:text-gray-300 text-xl">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-black dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                Technologies We Use
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <div className="max-w-3xl mx-auto mt-16">
        <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
          <span className="material-icons text-white text-3xl mb-4 block">
            rocket_launch
          </span>
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to get started?
          </h2>
          <p className="text-[#c5daff] mb-6 max-w-md mx-auto">
            Tell us about your project and we&apos;ll put together a plan
            tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-[#eef4ff] transition-colors"
            >
              Start a Project
            </Link>
            <a
              href="mailto:contact@cierclellc.com"
              className="text-[#c5daff] hover:text-white px-6 py-3 rounded-full font-semibold transition-colors border border-[#7db1ff] hover:border-white"
            >
              contact@cierclellc.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
