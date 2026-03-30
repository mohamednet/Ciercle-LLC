import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Ciercle LLC terms of service. Read our terms and conditions for using our services and website.",
  alternates: { canonical: "https://cierclellc.com/terms-of-service" },
};

const sections = [
  {
    icon: "person",
    title: "1. Eligibility",
    text: "You must be at least 13 years of age to use our Services. If you are under 18, you must have the consent of a parent or legal guardian. By using our Services, you represent and warrant that you meet this eligibility requirement. If we learn that we have collected information from a person under the age of 13 without parental consent, we will delete that information promptly.",
  },
  {
    icon: "how_to_reg",
    title: "2. Account Registration",
    text: "Some of our Services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary. You must notify us immediately of any unauthorized use of your account. Ciercle LLC is not liable for any loss arising from unauthorized access to your account.",
  },
  {
    icon: "gavel",
    title: "3. Use of Services",
    text: "You agree to use our Services only for lawful purposes and in compliance with all applicable laws and regulations. You shall not: attempt unauthorized access to our systems or networks; transmit viruses, malware, or other harmful code; interfere with or disrupt the integrity or performance of our Services; use automated means (bots, scrapers, crawlers) to access our Services without prior written permission; reverse engineer, decompile, or disassemble any part of our applications; impersonate any person or entity or misrepresent your affiliation; use our Services to infringe upon the intellectual property rights of others; or collect or harvest user information without consent.",
  },
  {
    icon: "phone_iphone",
    title: "4. Mobile Applications",
    text: "Our mobile applications are available through the Apple App Store and Google Play Store. These Terms constitute an agreement between you and Ciercle LLC — not with Apple, Google, or any other app store provider. Ciercle LLC is solely responsible for the content, maintenance, support, and functionality of our applications. App store providers have no obligation to provide maintenance or support services. In the event of any failure of an application to conform to applicable warranties, you may notify the app store provider for a refund of the purchase price (if applicable); to the maximum extent permitted by law, app store providers have no other warranty obligation with respect to our applications.",
  },
  {
    icon: "payment",
    title: "5. Payments & Subscriptions",
    text: "Certain features of our Services may require payment, including one-time purchases, subscriptions, or in-app purchases. All payments are processed through the applicable app store (Apple App Store or Google Play Store) or our designated third-party payment processor. Prices are displayed in the applicable currency and may be subject to taxes. Subscriptions automatically renew unless cancelled before the end of the current billing period. You can manage and cancel subscriptions through your app store account settings. Refunds are subject to the policies of the applicable app store. We reserve the right to change pricing with reasonable advance notice.",
  },
  {
    icon: "copyright",
    title: "6. Intellectual Property",
    text: "All content, features, functionality, software, designs, code, graphics, logos, trademarks, trade names, and service marks displayed on or through our Services are the exclusive property of Ciercle LLC or its licensors and are protected by United States and international intellectual property laws including copyright, trademark, patent, and trade secret laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our Services for personal, non-commercial purposes. You may not copy, modify, distribute, sell, lease, sublicense, or create derivative works based on any part of our Services without prior written permission from Ciercle LLC.",
  },
  {
    icon: "edit_note",
    title: "7. User Content",
    text: "If you submit, post, or transmit any content to us (including messages, feedback, suggestions, reviews, or other materials), you grant Ciercle LLC a non-exclusive, royalty-free, perpetual, irrevocable, worldwide license to use, reproduce, modify, adapt, publish, display, and distribute such content for the purpose of providing, improving, and promoting our Services. You represent that you own or have the necessary rights to grant this license and that your content does not violate any third-party rights or applicable laws. We reserve the right to remove any user content that violates these Terms.",
  },
  {
    icon: "link",
    title: "8. Third-Party Services & Links",
    text: "Our Services may contain links to or integrations with third-party websites, services, or content that are not owned or controlled by Ciercle LLC. We have no control over and assume no responsibility for the content, privacy policies, practices, or availability of any third-party services. You acknowledge and agree that Ciercle LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any third-party content, goods, or services. We encourage you to review the terms and privacy policies of any third-party services you access.",
  },
  {
    icon: "warning",
    title: "9. Disclaimer of Warranties",
    text: "OUR SERVICES ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY LAW, CIERCLE LLC DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED. YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK.",
  },
  {
    icon: "block",
    title: "10. Limitation of Liability",
    text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CIERCLE LLC, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT; OR (D) ANY OTHER MATTER RELATING TO THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR $100 USD, WHICHEVER IS GREATER.",
  },
  {
    icon: "security",
    title: "11. Indemnification",
    text: "You agree to defend, indemnify, and hold harmless Ciercle LLC and its officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to: your violation of these Terms; your use of the Services; your violation of any third-party rights, including intellectual property rights; or any content you submit or transmit through the Services.",
  },
  {
    icon: "cancel",
    title: "12. Termination",
    text: "We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination: your right to use the Services will cease immediately; any licenses granted to you will terminate; we may delete your account and associated data, subject to our data retention obligations; and all provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
  },
  {
    icon: "balance",
    title: "13. Governing Law & Dispute Resolution",
    text: "These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any dispute arising from or relating to these Terms or your use of our Services shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot be resolved through negotiation within 30 days, it shall be subject to the exclusive jurisdiction of the state and federal courts located in Sheridan County, Wyoming. You waive any objections to the exercise of jurisdiction over you by such courts and to the venue of such courts.",
  },
  {
    icon: "update",
    title: "14. Changes to These Terms",
    text: "We reserve the right to modify these Terms at any time at our sole discretion. Material changes will be communicated by updating the \"Last updated\" date at the top of this page and, where appropriate, by providing additional notice (such as email notification or in-app alert). Your continued use of the Services after any changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must discontinue use of our Services. We encourage you to review these Terms periodically.",
  },
  {
    icon: "content_cut",
    title: "15. Severability",
    text: "If any provision of these Terms is found to be unenforceable, invalid, or illegal by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, shall be severed from these Terms. The invalidity of any provision shall not affect the validity and enforceability of the remaining provisions, which shall continue in full force and effect.",
  },
  {
    icon: "handshake",
    title: "16. Entire Agreement",
    text: "These Terms, together with our Privacy Policy and any other legal notices or agreements published by us on the Services, constitute the entire agreement between you and Ciercle LLC regarding your use of the Services. These Terms supersede any prior agreements, communications, or understandings, whether written or oral, relating to the subject matter hereof. No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.",
  },
  {
    icon: "mail",
    title: "17. Contact Us",
    text: "If you have any questions about these Terms of Service, please contact us at: Ciercle LLC, 30 N Gould St Ste R, Sheridan, WY 82801, United States. Email: contact@cierclellc.com. We aim to respond to all inquiries within 30 business days.",
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="material-icons text-white text-2xl">
            description
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          The rules and guidelines that govern your use of Ciercle LLC&apos;s
          website, mobile applications, and related services.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
          Last updated: March 11, 2026
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Welcome to Ciercle LLC. These Terms of Service
            (&quot;Terms&quot;) govern your access to and use of our website at{" "}
            <strong>cierclellc.com</strong>, our mobile applications published on
            the Google Play Store and Apple App Store, and any related services,
            features, or content (collectively, the &quot;Services&quot;). Our
            registered address is 30 N Gould St Ste R, Sheridan, WY 82801,
            United States. By accessing or using our Services, you agree to be
            bound by these Terms. If you do not agree, you must not use our
            Services.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-icons text-white text-xl">
                    {section.icon}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black dark:text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Card */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
          <span className="material-icons text-white text-3xl mb-4 block">
            help
          </span>
          <h2 className="text-2xl font-bold text-white mb-3">
            Have questions about these terms?
          </h2>
          <p className="text-[#c5daff] mb-6 max-w-md mx-auto">
            If anything is unclear or you need further information, don&apos;t
            hesitate to reach out.
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
