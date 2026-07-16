import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-[#d12027]">404</h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/"
            className="bg-[#d12027] text-white px-6 py-3 rounded"
          >
            Go to Home
          </Link>

          <Link
            href="/courses"
            className="border px-6 py-3 rounded"
          >
            View Courses
          </Link>

          <Link
            href="/contact-us"
            className="border px-6 py-3 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}