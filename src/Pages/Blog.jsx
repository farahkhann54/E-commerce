import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });

  const [blogText, setBlogText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleAddBlog = (e) => {
    e.preventDefault();

    if (blogText.trim() === "") {
      setError("Please write something before submitting!");
      return;
    }

    const newBlog = {
      id: Date.now(),
      text: blogText,
    };

    setBlogs([...blogs, newBlog]);
    setBlogText("");
    setError("");
  };

  return (
    <div className="min-h-screen w-full bg-orange-200 flex items-start justify-center p-4">
      <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-orange-50 rounded-2xl shadow-lg mt-6 sm:mt-10">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
          ✍️ My Blog
        </h1>

        {/* Error message */}
        {error && (
          <p className="text-red-600 mb-2 sm:mb-3 font-semibold text-center text-sm sm:text-base">
            {error}
          </p>
        )}

        {/* Blog form */}
        <form onSubmit={handleAddBlog} className="mb-6 sm:mb-8">
          <textarea
            placeholder="Write your blog here..."
            value={blogText}
            onChange={(e) => {
              setBlogText(e.target.value);
              if (error) setError("");
            }}
            className="w-full p-3 sm:p-4 border border-gray-300 bg-white rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-sm text-sm sm:text-base"
            rows={4}
          />

          <button
            type="submit"
            className="mt-3 sm:mt-4 w-full bg-indigo-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 rounded-xl shadow-md transition text-sm sm:text-base"
          >
            ➕ Add Blog
          </button>
        </form>

        {/* Blog list */}
        <div>
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500 italic text-sm sm:text-base">
              🚀 No blogs yet — start writing!
            </p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="mb-3 sm:mb-5 p-3 sm:p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
              >
                <p className="mb-2 sm:mb-4 whitespace-pre-line text-gray-800 text-sm sm:text-lg leading-relaxed">
                  {blog.text}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() =>
                      setBlogs(blogs.filter((b) => b.id !== blog.id))
                    }
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 font-semibold shadow transition"
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
