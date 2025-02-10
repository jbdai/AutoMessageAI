import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [uniqueId, setUniqueId] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!uniqueId) return alert("Enter Unique ID");
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Login</h1>
      <input
        type="text"
        className="mt-4 px-4 py-2 border rounded-lg"
        placeholder="Enter Unique ID"
        value={uniqueId}
        onChange={(e) => setUniqueId(e.target.value)}
      />
      <button onClick={handleLogin} className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg">
        Login
      </button>
    </div>
  );
}
