"use client";
import React from "react";
import { useRouter } from "next/navigation";
function page() {
  const router = useRouter();
  return (
    <div>
      <h1 className="font-bold text-center text-3xl">Blog</h1>
      <button
        className="rounded-xl bg-black text-white hover:bg-gray-600 p-4 cursor-pointer items-center"
        onClick={() => router.push("/")}
      >
        Back
      </button>
    </div>
  );
}

export default page;
