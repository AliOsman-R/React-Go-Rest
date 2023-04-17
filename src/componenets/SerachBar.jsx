import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

const SerachBar = ({ searchTerm, setSearchTerm, setIsCreate, isCreate }) => {
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start gap-3 items-center w-full px-2 bg-[#e1e1e1] border-none outline-none focus-within:shadow-sm rounded-md ">
        <IoMdSearch fontSize={21} />
        <input
          type="text"
          className="w-full outline-none p-2 bg-[#e1e1e1]"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
      </div>
      <div className="flex gap-3">
        <div
          onClick={() => setIsCreate(!isCreate)}
          // to="/create-post"
          className="bg-black cursor-pointer text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </div>
      </div>
    </div>
  );
};

export default SerachBar;
