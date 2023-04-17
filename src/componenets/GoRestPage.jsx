import React, { useEffect, useState } from "react";
import axios from "axios";
import SerachBar from "./SerachBar";
import Post from "./Post";
import Pagination from "./Pagination";
import { url } from "../api";
import Create from "./Create";
import Spinner from "./Spinner";

const GO_REST = () => {
  const [posts, setPosts] = useState([]);
  const [isCreate, setIsCreate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSpinner, setIsSpinner] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPgae, setPostPerPgae] = useState(9);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("somthing went wrong!! try later");
      })
      .finally(() => {
        setIsSpinner(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (id) {
      axios
        .delete(`https://gorest.co.in/public/v2/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GOREST_TOKEN}`,
          },
        })
        .then((res) => {
          setPosts(posts?.filter((post) => (post.id !== id ? post : "")));
          console.log(res);
        });
    }
  };

  const lastPostIndex = currentPage * postPerPgae;
  const firstPostIndex = lastPostIndex - postPerPgae;
  const currentPost = posts?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {isCreate ? (
        <Create
          setIsCreate={setIsCreate}
          isCreate={isCreate}
          posts={posts}
          setPosts={setPosts}
        />
      ) : (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-center">GO REST POSTS</h1>
          <SerachBar
            searchTerm={searchTerm}
            isCreate={isCreate}
            setIsCreate={setIsCreate}
            setSearchTerm={setSearchTerm}
          />
          {searchTerm ? (
            <Post
              posts={posts?.filter((post) =>
                post.title.toLowerCase().includes(searchTerm)
              )}
              handleDelete={handleDelete}
            />
          ) : (
            <>
              {isSpinner && <Spinner message={"loading posts..."} />}
              <Post
                posts={currentPost}
                handleDelete={handleDelete}
                setPosts={setPosts}
              />
            </>
          )}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postPerPgae={postPerPgae}
            totalPosts={posts?.length}
          />
        </div>
      )}
    </>
  );
};

export default GO_REST;
