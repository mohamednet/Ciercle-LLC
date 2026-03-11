import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
        <span className="material-icons text-gray-400 text-3xl">
          search_off
        </span>
      </div>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-black dark:text-white mb-4">
        404
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3b7de6] transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white px-6 py-3 rounded-full font-semibold transition-colors border border-gray-200 dark:border-gray-800"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
