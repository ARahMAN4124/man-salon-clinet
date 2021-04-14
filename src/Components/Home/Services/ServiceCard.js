import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="col-md-4">
      <div className="serviceCard mb-4">
        <img src={img} className="card-img-top" alt="card-img" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Link className="second-btn">Get Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
