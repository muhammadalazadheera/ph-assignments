import React from "react";

function SingleBlog({ blog }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 my-3">
      <h1 className="text-xl font-bold">{blog.question}</h1>
      <div className="border-b-2 border-t-2 border-gray-300 py-2 my-5 border-dashed">
        <p className="text-blue-500">Answer:</p>
        <p>{blog.answer}</p>
      </div>
      <p>
        <i className="fas fa-calendar"></i> {blog.date}
      </p>
    </div>
  );
}

export default SingleBlog;
