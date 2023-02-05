"use Client";
import React from "react";
import Image from "next/image";
import Image1 from "../public/Image1.png";
import Avatar1 from "../public/Avatar1.jpg";

const MiniBlog = () => {
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
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <hr />
        <div className="w-full">
          <p className="text-black/60 text-xs font-bold truncate flex-wrap w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit,
            veritatis temporibus nesciunt aperiam praesentium voluptas
            consequatur nulla recusandae quasi ad repellendus, non vitae dicta
            laborum ea ullam, exercitationem ab?
          </p>
        </div>
        <hr />
      </div>
      <div className="w-[40%] h-[7rem]">
        <Image
          src={Image1}
          alt="BLog"
          className="w-full h-full object-fill"
        ></Image>
      </div>
    </div>
  );
};

export default MiniBlog;
