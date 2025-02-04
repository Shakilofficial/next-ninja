import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs: Blog[] = await res.json();
  return blogs.slice(0, 3).map((blog) => ({ blogId: blog.id }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return (
    <div className="w-[90%] mx-auto my-12">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
