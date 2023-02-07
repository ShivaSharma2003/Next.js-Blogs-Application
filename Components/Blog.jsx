import React from "react";
import Avatar from "../public/Avatar.jpg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Image from "next/image";

const Blog = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className="w-[100%] grid grid-cols-12 p-4 gap-2 ">
      <div className="col-span-2 w-[100%] items-start justify-center hidden sm:flex">
        {blogs[1].user.Avatar ? (
          <Image
            src={blogs[1].user.Avatar}
            alt="Avatar"
            className="h-8 w-8 md:w-12 md:h-12 rounded-full cursor-pointer"
            width={100}
          />
        ) : (
          <Image
            src={Avatar}
            alt="Avatar"
            className="h-8 w-8 md:w-12 md:h-12 rounded-full cursor-pointer"
            width={100}
          />
        )}
      </div>
      <div className="col-span-12 sm:col-span-10 flex flex-col items-center justify-start gap-4 ">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <h3 className="font-bold text-black text-lg text-justify">
            {blogs[0].title}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%]">
          <h3 className="text-black/50 text-sm ">{blogs[0].description}</h3>
        </div>
        <div className="w-[100%] h-[15rem]">
          {blogs[0].image.map((item) => (
            <>
              <Image
                src={item}
                alt="Blog"
                className="w-full h-full object-fill"
                width={100}
                height={100}
              />
            </>
          ))}
        </div>
        <div className="flex items-center justify-center w-[100%]">
          <p className="text-sm text-justify">{blogs[0].content}</p>
        </div>
        <div className="grid grid-cols-12 w-[100%] px-4 ">
          <div className="col-span-6 flex flex-row gap-4 items-center justify-start">
            <div className="flex flex-col items-center justify-center cursor-pointer ">
              <FaThumbsUp className="hover:text-blue-700 " />
              <h6 className="text-xs hover:text-blue-700 text-black/50 font-bold">
                {blogs[0].likes.length}
              </h6>
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <FaThumbsDown className="hover:text-red-700 " />
              <h6 className="text-xs hover:text-red-700 text-black/50 font-bold">
                {blogs[0].dislikes?.length}
              </h6>
            </div>
          </div>
          <div className="col-span-6 flex flex-row gap-4 ">
            <div>
              {blogs[1].user.Avatar ? (
                <Image
                  src={blogs[1].user.Avatar}
                  alt="Avatar"
                  className="h-8 w-8 md:w-12 md:h-12 rounded-full cursor-pointer"
                  width={100}
                />
              ) : (
                <Image
                  src={Avatar}
                  alt="Avatar"
                  className="h-8 w-8 md:w-12 md:h-12 rounded-full cursor-pointer"
                  width={100}
                />
              )}
            </div>
            <div className="flex flex-col items-start justify-start ">
              <h4 className="text-sm text-black/70 font-bold ">
                {blogs[1].user.userName}
              </h4>
              <h6 className="text-xs text-black/50 font-bold">
                Professional Traveller
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
