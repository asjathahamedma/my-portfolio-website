"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mb-6 items-center px-4 py-2 text-sm font-medium text-white 
                 bg-fuchsia-600 dark:bg-[#00D9FF] rounded-lg shadow 
                 hover:bg-fuchsia-700 dark:hover:bg-[#00bcd4] transition hidden sm:block"
    >
      ← Back
    </button>
  );
}
