import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, img, description, date } = blog;
  return (
    <div className="col-md-4">
      <div className="blogCard mb-4">
        <div>
          <img
            src={img}
            alt=""
            className="img-fluid rounded"
            style={{ height: "150px", width: "100%" }}
          />
        </div>
        <small>bt admin /{date}</small>
        <h4> {title}</h4>
        <p className="text-secondary">{description}</p>
        <Link>Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
