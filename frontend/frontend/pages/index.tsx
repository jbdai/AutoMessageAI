import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to AutoMessage AI</h1>
      <Link href="/dashboard">
        <button className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg">Go to Dashboard</button>
      </Link>
    </div>
  );
}
