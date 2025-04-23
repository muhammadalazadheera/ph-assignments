import React from "react";
import { useLoaderData } from "react-router";
import SectionTitle from "../components/Global/SectionTitle";
import SingleBlog from "../components/BlogPage/SingleBlog";
import ChangeTitle from "../components/Global/ChangeTitle"


function BlogsPage() {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      <ChangeTitle title="Blogs" />
      <SectionTitle title="Blogs" subtitle="Explore our latest blog posts" />
      <div className="container w-[80%] mx-auto my-10">
        {blogs.map((blog) => <SingleBlog key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
}

export default BlogsPage;
