import React, { useState } from "react";
import Edit from "./Edit";
import axios from "axios";
// import { token } from "../api";

function Post({ posts, handleDelete, setPosts }) {
  const [editeId, setEditeId] = useState("");

  const handleEdit = (title, body, id) => {
    const post = { title, body };
    axios
      .put(`https://gorest.co.in/public/v2/posts/${id}`, post, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GOREST_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setPosts((prevPosts) => {
          prevPosts = prevPosts?.map((post) =>
            post.id === id
              ? { ...post, title: res.data.title, body: res.data.body }
              : post
          );
          return prevPosts;
        });
      })
      .catch((err) => {
        console.log(err);
        alert("somthing went wrong!! try later");
      })
      .finally(() => {
        setEditeId("");
      });
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1  gap-4">
      {posts?.map((post) => {
        {
          return editeId === post.id ? (
            <Edit key={post.id} handleEdit={handleEdit} post={post} />
          ) : (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
              <div className="flex gap-3 mt-3">
                <button className="btn" onClick={() => handleDelete(post.id)}>
                  Delete
                </button>
                <button className="btn" onClick={() => setEditeId(post.id)}>
                  Edit
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Post;
