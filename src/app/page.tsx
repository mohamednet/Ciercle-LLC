import Link from "next/link";
import BrowserPreview from "@/components/BrowserPreview";
import FloatingIcons from "@/components/FloatingIcons";
import AppShowcase from "@/components/AppShowcase";

const processSteps = [
  {
    step: "01",
    icon: "search",
    title: "Discovery",
    description: "We dive deep into your vision, goals, and target audience to define the perfect roadmap for your product.",
  },
  {
    step: "02",
    icon: "palette",
    title: "Design",
    description: "Pixel-perfect UI/UX design with interactive prototypes — so you see exactly what you're getting before a single line of code.",
  },
  {
    step: "03",
    icon: "code",
    title: "Develop",
    description: "Clean, scalable code built with modern tech stacks. We ship fast without cutting corners.",
  },
  {
    step: "04",
    icon: "rocket_launch",
    title: "Launch & Scale",
    description: "From deployment to app store submission — we handle the launch and support you as you grow.",
  },
];

const whyChooseUs = [
  {
    icon: "rocket_launch",
    title: "Rapid Delivery",
    description: "From concept to launch in weeks, not months. We use agile sprints and tight feedback loops to ship fast.",
  },
  {
    icon: "devices",
    title: "Cross-Platform",
    description: "One team for web, iOS, Android, and backend. No need to juggle multiple agencies or freelancers.",
  },
  {
    icon: "shield",
    title: "Production-Grade",
    description: "Enterprise-level security, testing, and CI/CD from day one. Your product is built to scale.",
  },
  {
    icon: "support_agent",
    title: "Ongoing Support",
    description: "We don't disappear after launch. Maintenance, updates, and scaling — we're with you for the long haul.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 text-center max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-black dark:text-white">
          Engineering the world&apos;s
          <br />
          most refined digital products.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
          Partnering with innovative teams to build scalable web, mobile, and AI
          solutions.{" "}
          <br className="hidden md:block" />
          Building what others only imagine.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-primary hover:bg-[#3b7de6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-sm"
          >
            Get Started
          </Link>
          <Link
            href="/apps"
            className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-black dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2"
          >
            View Our Work
            <span className="material-icons text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="pt-24 pb-32 px-4 lg:px-8 overflow-hidden">
        <BrowserPreview />
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-clip flex flex-col items-center justify-center text-center">
        <p className="font-semibold text-gray-500 dark:text-gray-400 mb-4 relative z-10 uppercase tracking-widest text-sm">
          Our Track Record
        </p>
        <div className="relative">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-black dark:text-white leading-none mb-2 relative z-10">
            53+ Apps Built
          </h2>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-black dark:text-white leading-none mb-2 relative z-10">
            1M+ Lines of Code
          </h2>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-black dark:text-white leading-none relative z-10">
            100+ Integrations
          </h2>
          <FloatingIcons />
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-[1.1]">
            How we bring your
            <br />
            <span className="text-gray-400 dark:text-gray-500">ideas to life.</span>
          </h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />

          {processSteps.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={item.step} className={`relative flex items-start mb-16 last:mb-0 md:${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                {/* Dot on the line */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-950 z-10 shadow-md top-8" />

                {/* Spacer for mobile (left side where line is) */}
                <div className="w-16 shrink-0 md:hidden" />

                {/* Content card */}
                <div className={`md:w-[calc(50%-40px)] ${isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}`}>
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-sm shrink-0 ${
                        i === 0 ? "bg-blue-500" : i === 1 ? "bg-purple-500" : i === 2 ? "bg-emerald-500" : "bg-orange-500"
                      }`}>
                        <span className="material-icons text-white text-2xl">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                          Step {item.step}
                        </span>
                        <h3 className="text-lg font-bold text-black dark:text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* App Showcase */}
      <AppShowcase />

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-primary rounded-3xl px-8 md:px-16 py-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#7db1ff]/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2a5db8]/30 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Ready to build something great?
            </h2>
            <p className="text-[#c5daff] text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s turn your idea into a product people love. Get in touch and let&apos;s start building.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#eef4ff] transition-colors shadow-lg"
              >
                Start a Project
              </Link>
              <Link
                href="/apps"
                className="text-[#c5daff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors border border-[#7db1ff] hover:border-white"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-4">
            Why Ciercle
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            Why choose us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <span className="material-icons text-white text-2xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
