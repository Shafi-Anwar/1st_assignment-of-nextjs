import blogData from "@/data/blog.json";
import { Course } from "@/types/data";

export default function blogDetail({ params }: { params: { id: string } }) {
  const blog = blogData.find((b: Course) => b.id === parseInt(params.id));
  if (!blog)
    return (
      <div className="p-6 text-center text-lg text-gray-500">
        blog not found.
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-2xl space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 text-center hover:text-gray-500 transition-colors cursor-pointer">
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

      <div className="space-y-4">
        <p className="text-lg text-gray-700">{blog.content}</p>
        <div className="flex justify-center">
          <a
            href={`/`}
            className="inline-block px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
          >
            Read full Article
          </a>
        </div>
      </div>
    </div>
  );
}
