import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white text-center px-6">
      {/* Background glow / subtle LED feel */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_60%)]"></div>

      <div className="max-w-xl mx-auto">
        <h1 className="text-6xl font-bold text-red-500 mb-4 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you’re looking for might have been moved, renamed, or no
          longer exists. Explore our LED display solutions in the UAE instead.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 text-lg font-medium bg-gradient-to-r from-red-600 to-yellow-400 rounded-full shadow-lg hover:shadow-red-400/50 transition-transform hover:-translate-y-1"
        >
          Back to Home
        </Link>
      </div>

      {/* Optional footer */}
      <div className="absolute bottom-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Al Ghwasa – LED Display & Signage
        Solutions, Dubai UAE
      </div>
    </section>
  );
}
