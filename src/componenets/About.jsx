import React from "react";
import pic from "../assets/me.jpeg";
import vid from "../assets/vid.mp4";

function About() {
  return (
    <div className="flex flex-col bg-black text-center text-2xl mb-5 pt-5">
      <video
        className="absolute top-0 left-0 -z-[8px] object-cover w-full h-full opacity-[0.1]"
        autoPlay
        muted
        loop
        controls={false}
      >
        <source src={vid} type="video/mp4" />
      </video>
      <span className="text-white">About Me Page</span>
      <span className="text-gray-400 text-[12px]">- Welcome to My page -</span>
      <div className=" flex flex-col items-center  shadow-xl w-full min-h-[250px] text-xl font-bold mt-2">
        <div className="flex flex-col mt-10 p-5 gap-6 w-[80%] rounded-md items-center justify-center shadow-lg z-[5px] bg-[#2d2489] mb-10">
          <img
            src={pic}
            alt=""
            className="rounded-full h-40 w-40  object-cover"
          />
          <p className="text-white font-bold text-[13px]">
            Hey there, my name is Ali Osman, and I'm a 22-year-old student
            currently studying software engineering at Uniten. I have always
            been passionate about technology and learning how to build things
            from scratch. That's what led me to pursue a degree in software
            engineering, and I am enjoying every bit of it. Apart from
            academics, I am a huge sports enthusiast. I love playing and
            watching all kinds of sports, including football, and basketball.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
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
      </div>
    </div>
  );
}

export default About;
