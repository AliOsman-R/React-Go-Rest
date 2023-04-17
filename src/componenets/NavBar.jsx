import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/vimigo-logo.png";

const isNotActiveStyle =
  "flex px-5 gap-3 text-[18px]  text-white hover:text-white hover:border-b-2 hover:border-white-800 transtion-all duration-100 ease-in-out capitalize items-center";
const isActiveStyle =
  "flex px-5 gap-3 text-xl font-extrabold transtion-all duration-100 ease-in-out capitalize items-center text-white";

function NavBar() {
  return (
    <div className="flex z-10  justify-between w-full items-center p-3 bg-black">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[220px]" />
      </Link>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            to={"faq"}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/gorest"}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            GO REST
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
