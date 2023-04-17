import React, { useState } from "react";

export default function Edit({ post, handleEdit }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((title, body)) handleEdit(title, body, post.id);
  };

  return (
    <form
      className="bg-white w-full shadow-lg rounded-md p-2"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
          Body
        </label>
        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="appearance-none border h-[120px] border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Update Post
      </button>
    </form>
  );
}
