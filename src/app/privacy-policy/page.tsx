import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections: {
  icon: string;
  title: string;
  content: { subtitle?: string; text: string }[];
}[] = [
  {
    icon: "fingerprint",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Personal Information You Provide",
        text: "When you contact us through our website, create an account, or interact with our services, we may collect your full name, email address, phone number, message content submitted via our contact form, payment information (processed securely by third-party providers), and any other information you voluntarily provide.",
      },
      {
        subtitle: "Information Collected Automatically",
        text: "When you use our website or mobile applications, we automatically collect certain information including: device type, model, and unique device identifiers; operating system and version; IP address and approximate geographic location; browser type and version; app usage data and interaction patterns; crash reports and performance data; advertising identifiers (such as Apple IDFA or Google Advertising ID); pages visited, referring URLs, and session duration.",
      },
      {
        subtitle: "Cookies & Tracking Technologies",
        text: "We use cookies, web beacons, pixels, and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver relevant content. Essential cookies are required for basic site functionality. Analytics cookies help us understand how visitors interact with our website. You can manage cookie preferences through your browser settings. Note that disabling cookies may affect site functionality.",
      },
      {
        subtitle: "Third-Party Services",
        text: "Our mobile applications may integrate with the following third-party services: Google Analytics and Firebase Analytics (usage analytics), Google AdMob (advertising), Firebase Crashlytics (crash reporting), Apple App Analytics (iOS performance data), and payment processors for in-app purchases. Each of these services has its own privacy policy governing data collection. We encourage you to review the privacy policies of Google (policies.google.com/privacy) and Apple (apple.com/legal/privacy).",
      },
    ],
  },
  {
    icon: "account_balance",
    title: "2. Legal Basis for Processing",
    content: [
      {
        text: "We process your personal information based on one or more of the following legal grounds: (a) your consent, which you may withdraw at any time; (b) the necessity to perform a contract with you or take steps prior to entering into a contract; (c) compliance with a legal obligation to which we are subject; (d) our legitimate interests, such as improving our services, preventing fraud, and ensuring network security, provided these interests are not overridden by your fundamental rights and freedoms.",
      },
    ],
  },
  {
    icon: "settings",
    title: "3. How We Use Your Information",
    content: [
      {
        text: "We use the information we collect for the following purposes: to respond to your inquiries and provide customer support; to provide, maintain, and improve our applications and website; to process transactions and send related information; to monitor usage trends, performance metrics, and service quality; to detect, prevent, and address technical issues, fraud, and security vulnerabilities; to send promotional communications and updates (only with your explicit opt-in consent); to personalize your experience and deliver relevant content; to comply with legal obligations and enforce our terms; and to conduct research and analysis to improve our products and services.",
      },
    ],
  },
  {
    icon: "lock",
    title: "4. Data Storage & Security",
    content: [
      {
        text: "Your data is stored securely using industry-standard encryption protocols (TLS 1.2+ for data in transit, AES-256 for data at rest). We use trusted cloud infrastructure providers that maintain SOC 2 Type II compliance. Our security measures include regular security audits, access controls with least-privilege principles, encrypted backups, and incident response procedures. While we take all reasonable measures to protect your information, no method of electronic storage or transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to promptly notifying affected users in the event of a data breach as required by applicable law.",
      },
    ],
  },
  {
    icon: "share",
    title: "5. Data Sharing & Disclosure",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        text: "We do not sell, trade, or rent your personal information to third parties for their marketing purposes.",
      },
      {
        subtitle: "When We May Share Information",
        text: "We may share your information in the following limited circumstances: with trusted service providers who assist us in operating our business (hosting, analytics, email delivery, payment processing), subject to strict confidentiality agreements; with law enforcement or government authorities when required by law, subpoena, or court order; to protect the rights, property, or safety of Ciercle LLC, our users, or the public; in connection with a merger, acquisition, or sale of all or a portion of our assets (users will be notified via email or prominent notice on our website); and with your explicit consent.",
      },
    ],
  },
  {
    icon: "schedule",
    title: "6. Data Retention",
    content: [
      {
        text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Specific retention periods: contact form submissions are retained for up to 2 years; account data is retained for the duration of your account plus 30 days after deletion request; analytics data is retained in aggregated, anonymized form; transaction records are retained for 7 years as required by tax and accounting regulations. You may request early deletion of your data by contacting us, subject to legal retention requirements.",
      },
    ],
  },
  {
    icon: "verified_user",
    title: "7. Your Rights",
    content: [
      {
        subtitle: "General Rights",
        text: "Depending on your location, you may have the right to: access and obtain a copy of your personal data; correct inaccurate or incomplete data; request deletion of your personal data; restrict or object to certain processing activities; data portability (receive your data in a structured, machine-readable format); withdraw consent at any time where processing is based on consent; and lodge a complaint with a supervisory authority.",
      },
      {
        subtitle: "How to Exercise Your Rights",
        text: "To exercise any of these rights, contact us at contact@cierclellc.com or write to us at 30 N Gould St Ste R, Sheridan, WY 82801. We will respond to your request within 30 days. We may need to verify your identity before processing your request. We will not discriminate against you for exercising your privacy rights.",
      },
    ],
  },
  {
    icon: "flag",
    title: "8. California Privacy Rights (CCPA/CPRA)",
    content: [
      {
        text: "If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA). You have the right to: know what personal information we collect, use, disclose, and sell; request deletion of your personal information; opt out of the sale or sharing of your personal information (we do not sell your data); limit the use and disclosure of sensitive personal information; and non-discrimination for exercising your privacy rights. To submit a verifiable consumer request, contact us at contact@cierclellc.com. You may also designate an authorized agent to make a request on your behalf.",
      },
    ],
  },
  {
    icon: "do_not_disturb",
    title: "9. Do Not Track Signals",
    content: [
      {
        text: "Some browsers offer a \"Do Not Track\" (DNT) feature that signals to websites that you do not want your online activity tracked. There is currently no universally accepted standard for how companies should respond to DNT signals. At this time, we do not respond to DNT signals. However, you can manage tracking preferences through your browser settings and the cookie controls described in Section 1.",
      },
    ],
  },
  {
    icon: "child_care",
    title: "10. Children's Privacy",
    content: [
      {
        text: "Our services are not directed to individuals under 13 years of age (or under 16 in the European Economic Area). We do not knowingly collect personal information from children under these ages. If we become aware that we have inadvertently collected personal data from a child under the applicable age, we will take steps to delete such information promptly. If you believe a child has provided us with personal information, please contact us at contact@cierclellc.com.",
      },
    ],
  },
  {
    icon: "public",
    title: "11. International Data Transfers",
    content: [
      {
        text: "Ciercle LLC is based in the United States. Your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. These countries may have data protection laws that differ from those in your jurisdiction. By using our services, you consent to the transfer of your information to these countries. Where required by applicable law, we implement appropriate safeguards (such as Standard Contractual Clauses) to protect your data during international transfers.",
      },
    ],
  },
  {
    icon: "balance",
    title: "12. Governing Law",
    content: [
      {
        text: "This Privacy Policy is governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the state and federal courts located in Wyoming.",
      },
    ],
  },
  {
    icon: "update",
    title: "13. Changes to This Policy",
    content: [
      {
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the \"Last updated\" date at the top of this page and, where appropriate, by sending an email notification or displaying a prominent notice within our applications. Your continued use of our services after any changes constitutes acceptance of the updated policy. We encourage you to review this policy periodically.",
      },
    ],
  },
  {
    icon: "mail",
    title: "14. Contact Us",
    content: [
      {
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at: Ciercle LLC, 30 N Gould St Ste R, Sheridan, WY 82801, United States. Email: contact@cierclellc.com. We aim to respond to all inquiries within 30 business days.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="material-icons text-white text-2xl">
            shield
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          How Ciercle LLC collects, uses, and protects your information across
          our website and mobile applications.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
          Last updated: March 11, 2026
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ciercle LLC (&quot;Ciercle,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) operates the website{" "}
            <strong>cierclellc.com</strong> and publishes mobile applications on the
            Google Play Store and Apple App Store. Our registered address is 30 N
            Gould St Ste R, Sheridan, WY 82801, United States. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our mobile
            applications. By using our services, you agree to the collection and
            use of information in accordance with this policy.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <span className="material-icons text-white text-xl">
                    {section.icon}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 pl-14">
                {section.content.map((item, i) => (
                  <div key={i}>
                    {item.subtitle && (
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1 uppercase tracking-wide">
                        {item.subtitle}
                      </h3>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Card */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
          <span className="material-icons text-white text-3xl mb-4 block">
            mail
          </span>
          <h2 className="text-2xl font-bold text-white mb-3">
            Questions about your privacy?
          </h2>
          <p className="text-[#c5daff] mb-6 max-w-md mx-auto">
            If you have any questions or requests regarding this Privacy Policy,
            reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:contact@cierclellc.com"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-[#eef4ff] transition-colors"
            >
              contact@cierclellc.com
            </a>
            <Link
              href="/contact"
              className="text-[#c5daff] hover:text-white px-6 py-3 rounded-full font-semibold transition-colors border border-[#7db1ff] hover:border-white"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
