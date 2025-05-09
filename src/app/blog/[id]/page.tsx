import { blogData } from "@/data/data";
import { Course } from "@/types/data";
import Link from "next/link";

export default function blogDetail({ params }: { params: { id: string } }) {
  const blog = blogData.find((b: Course) => b.id === parseInt(params.id));
  if (!blog)
    return (
      <div className="p-6 text-center text-lg text-gray-500">
        Blog not found.
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-2xl space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center hover:text-gray-600 transition-colors cursor-pointer">
        {blog.title}
      </h1>

      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg transform transition-all hover:scale-105 hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-lg"></div>
      </div>
      <h1 className="text-xl text-center font-bold">{blog.content}</h1>
      <div className="flex justify-center space-x-4">
        <Link
          href={blog.link}
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
        >
          Read Full Article
        </Link>

        <Link
          href={`/`}
          className="inline-block px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
