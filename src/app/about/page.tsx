import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ciercle LLC — a full-stack development studio based in Wyoming, USA. We build web, mobile, and AI solutions with clean code, fast delivery, and long-term support.",
  alternates: { canonical: "https://cierclellc.com/about" },
  openGraph: {
    title: "About Ciercle LLC",
    description:
      "Full-stack development studio based in Wyoming, USA. 53+ apps shipped, 1M+ lines of code, 100+ integrations.",
    url: "https://cierclellc.com/about",
  },
};

const values = [
  {
    icon: "code",
    title: "Clean Code",
    description:
      "Every project starts with a solid architecture. We write maintainable, scalable code that stands the test of time.",
  },
  {
    icon: "speed",
    title: "Ship Fast",
    description:
      "We move quickly without cutting corners. Tight feedback loops and agile sprints mean you see progress every week.",
  },
  {
    icon: "palette",
    title: "Design-First",
    description:
      "Great products start with great design. We prototype and validate before writing a single line of code.",
  },
  {
    icon: "security",
    title: "Security & Privacy",
    description:
      "Security isn't an afterthought. We follow best practices for data protection, encryption, and compliance from day one.",
  },
  {
    icon: "support_agent",
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We provide ongoing support, maintenance, and scaling as your product grows.",
  },
  {
    icon: "auto_awesome",
    title: "Innovation-Driven",
    description:
      "From AI integrations to cutting-edge frameworks, we stay ahead of the curve so your product does too.",
  },
];

const techStack = [
  { name: "React / Next.js", icon: "web", color: "bg-cyan-500" },
  { name: "Flutter / Dart", icon: "flutter_dash", color: "bg-sky-400" },
  { name: "TypeScript", icon: "data_array", color: "bg-primary" },
  { name: "Node.js", icon: "hexagon", color: "bg-green-600" },
  { name: "Python", icon: "data_object", color: "bg-yellow-600" },
  { name: "Firebase", icon: "local_fire_department", color: "bg-amber-500" },
  { name: "PostgreSQL", icon: "storage", color: "bg-indigo-600" },
  { name: "AWS / GCP", icon: "cloud", color: "bg-orange-500" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
          About Ciercle LLC
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A full-stack development studio building web, mobile, and AI solutions
          for teams that care about quality.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-black dark:text-white mb-4">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Ciercle LLC was founded with a simple belief: great software should
              be accessible to every business, not just the ones with massive
              budgets. With deep hands-on development experience
              across mobile, web, and cloud platforms, our team helps businesses of
              all sizes turn ideas into products people love.
            </p>
            <p>
              Based in Wyoming, USA, we specialize in end-to-end product
              development — from initial concept and UI/UX design through
              development, deployment, and ongoing support. Whether it&apos;s a
              native mobile app for iOS and Android, a full-stack web platform,
              or an AI-powered feature, we handle it all.
            </p>
            <p>
              We&apos;ve shipped 53+ applications, written over 1 million lines
              of production code, and integrated with 100+ third-party services.
              Every project is treated with the same attention to detail,
              regardless of size.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <p className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-4">
            What Drives Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Our Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <span className="material-icons text-white text-2xl">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <p className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-4">
            Tools We Use
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Our Tech Stack
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex items-center gap-3 shadow-sm"
            >
              <div
                className={`w-10 h-10 ${tech.color} rounded-xl flex items-center justify-center shrink-0`}
              >
                <span className="material-icons text-white text-xl">
                  {tech.icon}
                </span>
              </div>
              <span className="text-sm font-semibold text-black dark:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center shadow-sm">
            <span className="material-icons text-gray-400 text-3xl mb-3 block">
              location_on
            </span>
            <p className="text-sm font-semibold text-black dark:text-white mb-1">
              Headquarters
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              30 N Gould St Ste R
              <br />
              Sheridan, WY 82801
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center shadow-sm">
            <span className="material-icons text-gray-400 text-3xl mb-3 block">
              business
            </span>
            <p className="text-sm font-semibold text-black dark:text-white mb-1">
              Entity Type
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Limited Liability Company
              <br />
              Registered in Wyoming, USA
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center shadow-sm">
            <span className="material-icons text-gray-400 text-3xl mb-3 block">
              calendar_today
            </span>
            <p className="text-sm font-semibold text-black dark:text-white mb-1">
              Founded
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              March 2026
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
          <span className="material-icons text-white text-3xl mb-4 block">
            rocket_launch
          </span>
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to work together?
          </h2>
          <p className="text-[#c5daff] mb-6 max-w-md mx-auto">
            Tell us about your project and let&apos;s build something great.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-[#eef4ff] transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/apps"
              className="text-[#c5daff] hover:text-white px-6 py-3 rounded-full font-semibold transition-colors border border-[#7db1ff] hover:border-white"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
