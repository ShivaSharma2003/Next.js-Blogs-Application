import React from "react";
import MiniBlog from "../../Components/MiniBlog";

const FetchPopularBlogs = async () => {
  const data = await fetch("http://localhost:3000/api/blog/fetch");
  const response = data.json();
  return response;
};

const PopularBlogs = async (props) => {
  const blog = await FetchPopularBlogs();
  return (
    <div className="w-[100%] flex flex-col gap-4 ">
      {blog.map((item) => (
          <MiniBlog popularBlogs={item} key={item._id} />
      ))}
    </div>
  );
};

export default PopularBlogs;
