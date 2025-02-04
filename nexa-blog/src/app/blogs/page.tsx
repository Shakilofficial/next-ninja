"use client";

import BlogCard from "@/components/ui/BlogCard";
import Spinner from "@/components/ui/Spinner";
import { useGetAllBlogsQuery } from "@/redux/apis/blogs.api";
import { Blog } from "@/types";

/* export const metadata = {
  title: " NexaBlog | Blogs",
}; */

const BlogsPage = () => {
  /*   const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs: Blog[] =  res.json();
 */

  const {
    data: blogs,
    isFetching,
    isLoading,
    isError,
  } = useGetAllBlogsQuery({});

  if (isLoading || isFetching)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (isError) return <div>Error</div>;

  return (
    <div className="w-[90%] mx-auto my-12">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
