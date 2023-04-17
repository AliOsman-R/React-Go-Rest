import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/vimigo-logo.png";

const isNotActiveStyle =
  "flex px-5 gap-3 text-gray-500 hover:text-black transtion-all duration-200 ease-in-out capitalize items-center";
const isActiveStyle =
  "flex px-5 gap-3 font-extrabold border-r-2 boder-black transtion-all duration-200 eas-in-out capitalize items-center";

function SideBar({ closeToggle }) {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full  min-w-2100 hide-scrollbar ">
      <div className="flex flex-col p-2 gap-5 text-xl z-10">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className="flex px-5 my-6 gap-2 pt-1 w-190 items-center"
        >
          <img src={logo} alt="logo" className="w-[130px]" />
        </Link>
        <NavLink
          to={"/"}
          onClick={handleCloseSidebar}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/about"}
          onClick={handleCloseSidebar}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          About
        </NavLink>

        <NavLink
          onClick={handleCloseSidebar}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          to={"faq"}
        >
          FAQ
        </NavLink>

        <NavLink
          onClick={handleCloseSidebar}
          to={"/gorest"}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          GO REST
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
