"use client";
import React from "react";
import MiniBlog from "./MiniBlog";

const PopularBlogs = () => {
  const arr = [3, 3, 3, 3, 3, 3, 3];
  return (
    <div className="w-[100%] flex flex-col gap-4 ">
      {arr.map(() => (
        <>
          <MiniBlog />
        </>
      ))}
    </div>
  );
};

export default PopularBlogs;
