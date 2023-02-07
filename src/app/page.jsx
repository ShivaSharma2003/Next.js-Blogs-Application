import "./globals.css";
import Blog from "Components/Blog";

const FetchAllBlogs = async () => {
  const data = await fetch("http://localhost:3000/api/blog/fetch");
  const response = data.json()
  return response;
};

const page = async (props) => {
  const blog = await FetchAllBlogs();
  return (
    <>
      <div className="w-[100%] flex flex-col justifuy-center items-center">
        {blog.map((item) => (
          <>
            <Blog key={item._id} blogs={item} />
            <hr />
          </>
        ))}
      </div>
    </>
  );
};

export default page;
