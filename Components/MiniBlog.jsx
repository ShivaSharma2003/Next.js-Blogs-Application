"use client";
import React from "react";
import Image from "next/image";
import Avatar1 from "../public/Avatar1.jpg";

const MiniBlog = ({ popularBlogs }) => {
  return (
    <div className="w-[100%] px-2 flex flex-row justify-between cursor-pointer ">
      <div className="flex flex-col w-[60%] items-start justify-start gap-1">
        <div className="w-full flex flex-row gap-2">
          <Image
            src={Avatar1}
            alt="Avatar"
            className="h-6 w-6 rounded-full object-fill "
          ></Image>
          <h1 className="text-xs font-bold  text-black/50">Jessica Josef</h1>
        </div>
        <hr />
        <div className="w-full">
          <p className="text-black/75 font-bold text-sm text-start w-full ">
            {popularBlogs.title}
          </p>
        </div>
        <hr />
        <div className="w-full">
          <p className="text-black/60 text-xs font-bold h-[50px] text-ellipsis w-full">
            {popularBlogs.description}
          </p>
        </div>
        <hr />
      </div>
      <div className="w-[40%] h-[7rem]">
        <Image
          src={popularBlogs.image}
          alt="BLog"
          className="w-full h-full object-fill"
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
};

export default MiniBlog;
