import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project idea, a question, or just want to say hello? We&apos;d
          love to hear from you.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-black dark:text-white mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <span className="material-icons text-white text-xl">
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    Email
                  </p>
                  <a
                    href="mailto:contact@cierclellc.com"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    contact@cierclellc.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <span className="material-icons text-white text-xl">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    Address
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    30 N Gould St Ste R
                    <br />
                    Sheridan, WY 82801
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <span className="material-icons text-white text-xl">
                    schedule
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    Response Time
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Whether you need a mobile app, web platform, or AI integration
                — we&apos;re here to help. Tell us about your project and
                we&apos;ll get back to you with a plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
