import React, { useState } from "react";
import GoRestPage from "../componenets/GoRestPage";
import { Route, Routes, Link } from "react-router-dom";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/Footer";
import logo from "../assets/vimigo-logo.png";
import { HiMenu } from "react-icons/hi";
import SideBar from "../componenets/SideBar";
import { AiFillCloseCircle } from "react-icons/ai";
import About from "../componenets/About";
import FAQPage from "../componenets/FAQPage";
import HomeCo from "../componenets/HomeCo";
import Page404 from "../componenets/Page404";

function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="w-full">
      <div className="hidden md:flex  flex-initial">
        <NavBar />
      </div>
      <div className="flex md:hidden flex-row bg-black z-10">
        <div className="flex flex-row justify-between items-center p-2 shadow-md w-full z-10">
          <HiMenu
            color="white"
            fontSize={40}
            className="cursor-pointer"
            onClick={() => {
              setToggleSidebar(true);
            }}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-[130px]" />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-2/3 shadow-md overflow-y-auto animate-slide-in bg-black h-screen z-10">
            <div className="absolute w-full flex justify-end items-center p-2 z[10] ">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer z-[20]"
                onClick={() => {
                  setToggleSidebar(false);
                }}
              />
            </div>
            <SideBar closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className="min-h-[100vh]">
        <Routes>
          <Route path="/" element={<HomeCo />} />

          <Route path="/gorest" element={<GoRestPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
