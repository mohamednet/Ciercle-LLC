import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark pt-16 pb-8 px-6 lg:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
        {/* Brand */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo/CiercleLogo.png"
              alt="Ciercle LLC"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl tracking-tight">Ciercle LLC</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mb-6">
            Engineering the world&apos;s most refined digital products. Web,
            mobile, and AI solutions built with precision.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:contact@cierclellc.com"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href="/services?tab=mobile" className="hover:text-black dark:hover:text-white transition-colors">
                Mobile Development
              </Link>
            </li>
            <li>
              <Link href="/services?tab=web" className="hover:text-black dark:hover:text-white transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services?tab=ai" className="hover:text-black dark:hover:text-white transition-colors">
                AI Integration
              </Link>
            </li>
            <li>
              <Link href="/services?tab=cloud" className="hover:text-black dark:hover:text-white transition-colors">
                Cloud & Backend
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/apps" className="hover:text-black dark:hover:text-white transition-colors">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-black dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-black dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ciercle LLC. All rights reserved.</p>
        <p className="mt-2 md:mt-0">30 N Gould St Ste R, Sheridan, WY 82801</p>
      </div>
    </footer>
  );
}
