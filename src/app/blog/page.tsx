"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { blogData } from "@/data/data";
import Link from "next/link";
function page() {
  const router = useRouter();
  return (
    <div>
      <h1 className="font-bold text-center text-3xl">Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
        {blogData.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className="group border rounded-xl shadow-xl hover:scale-105 transform transition-all cursor-pointer overflow-hidden bg-white">
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-md text-gray-700">{blog.content}</p>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm font-medium text-gray-600">
                  Go to see view
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
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
