"use client";

import "./globals.css";
import Blog from "Components/Blog";
import Sidebar from "Components/Sidebar";

export default function page() {
  const arr = [6, 6, 6, 6, 6, 6, 6, 6, 6];
  return (
    <>
      <div className="w-[100%] flex flex-col justifuy-center items-center">
        <div className="md:w-[80%] w-[100%] flex flex-col md:grid grid-cols-12 md:gap-2">
          <div className="col-span-8 flex border-r-2 shadow-sm flex-col w-[100%] gap-2 ">
            {arr.map((item, key) => (
              <>
                <Blog key="" />
                <hr />
              </>
            ))}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
