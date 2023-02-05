import React from "react";
import Image from "next/image";
import Image1 from "../public/Image1.png";
import Avatar1 from "../public/Avatar1.jpg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="w-[100%] grid grid-cols-12 p-4 gap-2 ">
      <div className="col-span-2 w-[100%] flex items-start justify-center">
        <Image
          src={Avatar1}
          alt="Avatar"
          className="h-10 w-10 md:w-14 md:h-14 rounded-full cursor-pointer"
        />
      </div>
      <div className="col-span-10 flex flex-col items-center justify-start gap-4 ">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <h3 className="font-bold text-black text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%]">
          <h3 className="text-black/50 text-sm ">
            Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A saepe enim eaque sapiente suscipit nulla labore,
            consequatur maiores fugit ullam quas earum omnis consectetur ipsum
            magnam nobis repellat tempore minus.
          </h3>
        </div>
        <div className="w-[100%] h-[15rem]">
          <Image
            src={Image1}
            alt="Blog"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="flex items-center justify-center w-[100%]">
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum
            quas expedita! Aliquid obcaecati velit, fuga sed saepe enim nisi
            necessitatibus, porro dolores earum sunt accusamus explicabo. Rem
            unde consequuntur autem mollitia! Velit, dolores? Culpa illo
            veritatis ea assumenda laudantium! Maiores optio similique, odit qui
            voluptate sint nemo accusamus quidem illum quae aspernatur tenetur
            ipsa magni voluptas harum dicta provident doloremque repudiandae
            laudantium in. Sapiente exercitationem soluta reprehenderit quis
            quam ex odit inventore atque dicta laboriosam sequi hic rem nihil
            nam, error accusantium deserunt nesciunt earum enim consectetur
            amet. Itaque repellendus esse voluptatem asperiores quis adipisci!
            Quo facilis sequi minus!
          </p>
        </div>
        <div className="grid grid-cols-12 w-[100%] px-4 ">
          <div className="col-span-6 flex flex-row gap-4 items-center justify-start">
            <div className="flex flex-col items-center justify-center cursor-pointer ">
              <FaThumbsUp className="hover:text-blue-700 " />
              <h6 className="text-xs hover:text-blue-700 text-black/50 font-bold">
                Like
              </h6>
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <FaThumbsDown className="hover:text-red-700 " />
              <h6 className="text-xs hover:text-red-700 text-black/50 font-bold">
                Dislike
              </h6>
            </div>
          </div>
          <div className="col-span-6 flex flex-row gap-4 ">
            <div>
              <Image
                src={Avatar1}
                alt="Avatar"
                className="h-8 w-8 md:w-12 md:h-12 rounded-full cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-start justify-start ">
              <h4 className="text-sm text-black/70 font-bold ">Jasmin Josef</h4>
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
