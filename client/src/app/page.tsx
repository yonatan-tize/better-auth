import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-center p-8">
      <main className="max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4 tracking-tight">
          A Better Way to Authenticate
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Experience a seamless, secure, and modern authentication flow built
          with the latest technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/sign-in"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            href="/signup"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
