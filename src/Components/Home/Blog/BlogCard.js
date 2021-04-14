import React from "react";

const BlogCard = ({ blog }) => {
  const { title, img, description, date } = blog;
  return (
    <div className="col-md-4">
      <div className="blogCard">
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
      </div>
    </div>
  );
};

export default BlogCard;
