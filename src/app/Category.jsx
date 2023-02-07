"use client";

import React from "react";

const Category = () => {
  const arr = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

  return (
    <div className="w-[100%] flex flex-col items-center justify-center gap-2">
      <h4 className="text-md text-black/75 font-bold text-start">
        Discover more of what matters to you
      </h4>
      <div className="w-[100%] flex flex-row flex-wrap items-center justify-center gap-1 ">
        {arr.map((item, key) => (
          <div
            key=""
            className="border-2 border-black/20 rounded-md px-4 py-1 cursor-pointer "
          >
            <h4 className="text-sm text-black/50 font-semibold">
              Intelligence
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
