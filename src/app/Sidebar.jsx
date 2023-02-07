import SearchBar from "Components/SearchBar";
import Category from "@/app/Category";
import React from "react";
import PopularBlogs from "./PopularBlogs";

const Sidebar = () => {
  return (
    <div className="col-span-4 hidden md:flex shadow-sm flex-col w-[100%] p-4 gap-4 ">
      <div className="w-[100%]">
        <SearchBar />
      </div>
      <hr />
      <div className="w-[100%]">
        <Category />
      </div>
      <hr />
      <div className="w-[100%]">
        <PopularBlogs />
      </div>
    </div>
  );
};

export default Sidebar;
