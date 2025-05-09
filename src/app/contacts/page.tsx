"use client";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  return (
    <div>
      <h1 className="font-bold text-center text-3xl">Contact</h1>
      <button
        className="rounded-xl bg-black text-white hover:bg-gray-600 p-4 cursor-pointer"
        onClick={() => router.push("/")}
      >
        Back
      </button>
    </div>
  );
}

export default page;
