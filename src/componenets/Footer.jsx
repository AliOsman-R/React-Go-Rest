import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-col bg-black p-10 w-full text-white">
      <div className="flex justify-around gap-3 w-full  text-xl bg-black ">
        <Link to={"/about"}>About</Link>
        <Link to={"/faq"}>FAQ</Link>
        <Link to={"/gorest"}>GOREST</Link>
        <div className="flex flex-col">
          <span>Soical Media</span>
          <div className="flex justify-around">
            <a
              href="https://www.linkedin.com/in/ali-gibrail-34894726a"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/AliOsman-R" target="_blank">
              <AiOutlineGithub />
            </a>
            <a href="" target="_blank">
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-5 pt-5 flex items-center gap-5 justify-center">
        <span>&copy; All Rights Reserved</span>
        <div className="flex gap-5">
          <span>Terms & Conditions</span>
          <span>Privacy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
