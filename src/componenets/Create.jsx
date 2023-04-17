import axios from "axios";
import React, { useState } from "react";
import { url } from "../api";
import vid from "../assets/vid.mp4";
function Create({ setIsCreate, isCreate, setPosts, posts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((title, body)) {
      setAdding(true);
      const post = { user_id: "1027446", title, body };

      axios
        .post(url, post, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GOREST_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setPosts([...posts, res.data]);
          setTitle("");
          setBody("");
          setIsCreate(!isCreate);
        })
        .catch((err) => {
          console.log(err);
          alert("somthing went wrong!! try later");
        })
        .finally(() => {
          setAdding(false);
        });
    }
  };

  return (
    <div className="h-screen  bg-black flex items-center justify-center">
      <video
        className="absolute top-0 left-0 -z-1 object-cover w-full h-full opacity-25"
        autoPlay
        muted
        loop
        controls={false}
      >
        <source src={vid} type="video/mp4" />
      </video>
      <button
        onClick={() => setIsCreate(!isCreate)}
        className="border-2 border-red-600 text-white p-2  bg-red-600 rounded-lg absolute top-[95px] right-7"
      >
        RETURN BACK
      </button>
      <form
        onSubmit={handleSubmit}
        className="bg-white w-4/5 shadow-lg rounded-md px-8 py-6 z-[5]"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
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
            id="body"
            placeholder="Enter body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {adding ? (
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Adding Post...
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Create Post
          </button>
        )}
      </form>
    </div>
  );
}

export default Create;
