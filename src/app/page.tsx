import React from "react";
import blogData from "../data/blog.json"; // Importing the blog data
import Link from "next/link";

export default function SimpleLayout() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <main className="flex px-6 py-12 gap-8">
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
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-md text-gray-700">{blog.content}</p>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-sm font-medium text-gray-600">
                    Learn More
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="text-center border-t py-6 bg-gray-800 text-gray-300">
        <div className="space-x-6">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}
