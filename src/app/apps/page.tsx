import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work",
};

const projects = [
  {
    name: "Banking Platform",
    category: "Web Application",
    description:
      "A modern digital banking dashboard with real-time transaction monitoring, analytics, and account management.",
    tech: ["React", "Node.js", "PostgreSQL"],
    video: "/videos/project-1.mp4",
  },
  {
    name: "Cybersecurity Dashboard",
    category: "Web Application",
    description:
      "Enterprise-grade security monitoring platform with threat detection, incident response, and compliance reporting.",
    tech: ["Next.js", "Python", "AWS"],
    video: "/videos/project-2.mp4",
  },
  {
    name: "Crypto Landing Page",
    category: "Website",
    description:
      "High-conversion landing page for a cryptocurrency platform with real-time price feeds and wallet integration.",
    tech: ["React", "TypeScript", "Web3"],
    video: "/videos/project-3.mp4",
  },
  {
    name: "Creative Agency Website",
    category: "Website",
    description:
      "Visually rich agency portfolio with smooth animations, case studies, and an integrated contact system.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    video: "/videos/project-4.mp4",
  },
  {
    name: "Modern Admin Dashboard",
    category: "Web Application",
    description:
      "Feature-packed admin panel with data visualization, user management, role-based access control, and reporting.",
    tech: ["React", "TypeScript", "Firebase"],
    video: "/videos/project-5.mp4",
  },
  {
    name: "Repair Service Website",
    category: "Website",
    description:
      "Service booking platform with online scheduling, service tracking, and customer review system.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    video: "/videos/project-6.mp4",
  },
];

const mobileApps = [
  { video: "/videos/app-1.mp4" },
  { video: "/videos/app-2.mp4" },
  { video: "/videos/app-3.mp4" },
  { video: "/videos/app-4.mp4" },
  { video: "/videos/app-5.mp4" },
  { video: "/videos/app-6.mp4" },
  { video: "/videos/app-7.mp4" },
  { video: "/videos/app-8.mp4" },
  { video: "/videos/app-9.mp4" },
  { video: "/videos/app-10.mp4" },
  { video: "/videos/app-11.mp4" },
  { video: "/videos/app-12.mp4" },
];

export default function Apps() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
          Our Work
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A selection of projects we&apos;ve built for clients — from mobile
          apps to full-stack web platforms and AI-powered solutions.
        </p>
      </section>

      {/* Web Projects */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <p className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Web Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm group"
            >
              {/* Video Preview */}
              <div className="relative aspect-[16/9] bg-black overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Apps */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <p className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-4">
            Mobile Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Mobile Apps
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {mobileApps.map((app, i) => (
            <div key={i} className="flex-shrink-0">
              {/* iPhone frame */}
              <div className="relative bg-black rounded-[2rem] p-[5px] shadow-xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-black rounded-b-xl z-10" />
                {/* Screen */}
                <div className="relative rounded-[1.8rem] overflow-hidden bg-gray-900 aspect-[9/19.5]">
                  <video
                    src={app.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[80px] h-[3px] bg-gray-600 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
          <span className="material-icons text-white text-3xl mb-4 block">
            handshake
          </span>
          <h2 className="text-2xl font-bold text-white mb-3">
            Have a project in mind?
          </h2>
          <p className="text-[#c5daff] mb-6 max-w-md mx-auto">
            Let&apos;s discuss your idea and find the best way to bring it to
            life.
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
      </section>
    </div>
  );
}
