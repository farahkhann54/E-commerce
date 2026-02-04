import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });

  const [blogText, setBlogText] = useState("");
  const [error, setError] = useState(""); // NEW: state for error message

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleAddBlog = (e) => {
    e.preventDefault();

    if (blogText.trim() === "") {
      setError("Please write something before submitting!"); // NEW: show error
      return;
    }

    const newBlog = {
      id: Date.now(),
      text: blogText,
    };

    setBlogs([...blogs, newBlog]);
    setBlogText("");
    setError(""); // NEW: clear error on successful submit
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      {/* Show error message above textarea */}
      {error && (
        <p className="text-red-600 mb-2 font-semibold">{error}</p>
      )}

      <form onSubmit={handleAddBlog} className="mb-6">
        <textarea
          placeholder="Write your blog here..."
          value={blogText}
          onChange={(e) => {
            setBlogText(e.target.value);
            if (error) setError(""); // Clear error as user types
          }}
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={5}
        />

        <button
          type="submit"
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition"
        >
          Add your
        </button>

      </form>

      <div>
        {blogs.length === 0 && (
          <p className="text-center text-gray-500">No blogs added yet.</p>
        )}

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mb-4 p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition"
          >
            <p className="mb-3 whitespace-pre-line">{blog.text}</p>
            <button
              onClick={() => {
                setBlogs(blogs.filter((b) => b.id !== blog.id));
              }}
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
