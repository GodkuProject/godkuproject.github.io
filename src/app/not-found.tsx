import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="px-6 pt-20">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text mb-6">
            404 - Page Not Found
          </h1>
          <p className="text-gray-300 mb-8 text-xl">
            The page you are looking for does not exist.
          </p>
          <Link href="/">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white button-hover text-lg">
              Return Home
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
