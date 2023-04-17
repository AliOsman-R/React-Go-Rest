import React from "react";
import { Link } from "react-router-dom";
import vid from "../assets/video-2.mp4";

function HomeCo() {
  return (
    <>
      <div className=" flex flex-col gap-7 items-center justify-center h-[100vh] object-contain shadow-md">
        <video
          src={vid}
          className="h-screen w-full object-cover -z-10 absolute"
          autoPlay
          controls={false}
          muted
          loop
        ></video>
        <h1 className="text-white shadow-md text-2xl sm:text-3xl  md:text-5xl font-bold ">
          WELCOME TO HOME PAGE
        </h1>
        <Link
          to={"/gorest"}
          className="text-white border-4 text-2xl font-bold border-white p-3 cursor-pointer"
        >
          Check Posts
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-5 mb-5 shadow-lg">
        <img
          src="https://source.unsplash.com/random/900×700/?tech"
          alt=""
          className="w-full h-[300px] object-cover "
        />
        <img
          src="https://source.unsplash.com/random/900×700/?software"
          alt=""
          className="w-full h-[300px] object-cover "
        />
        <img
          src="https://source.unsplash.com/random/900×700/?coding"
          alt=""
          className="w-full h-[300px] object-cover "
        />
      </div>
    </>
  );
}

export default HomeCo;
