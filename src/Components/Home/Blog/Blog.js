import React from "react";
import "./Blog.css";
import BlogCard from "./BlogCard";
import img1 from "../../../image/pexels-photo-5131400.jpeg";
import img2 from "../../../image/pexels-photo-3992874.jpeg";
import img3 from "../../../image/pexels-photo-3998421.jpeg";

const Blog = () => {
  const blog = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "15.04.21",
      img: img1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora accusantium?adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "15.04.21",
      img: img2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora accusantium?adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "15.04.21",
      img: img3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora accusantium?adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora",
    },
  ];
  return (
    <section className="blog py-5">
      <div className="container">
        <h2
          className="main-text display-4 text-center"
          style={{ fontFamily: "Times" }}
        >
          Our Blog
        </h2>
        <div className="row pt-3">
          {blog.map((blog, i) => (
            <BlogCard blog={blog} key={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
