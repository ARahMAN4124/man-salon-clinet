import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, description, ServiceImg, price } = service;
  return (
    <div className="col-md-4">
      <div className="serviceCard rounded mb-4">
        <div className="card-body serviceInfo">
          <div className="card-title d-flex justify-content-between">
            <div>
              <h5>{title}</h5>
            </div>
            <div>
              <h6 className="main-text">$ {price}</h6>
            </div>
          </div>
          <p className="card-text">{description}</p>
          <Link to={`/BookingService/${service._id}`} className="second-btn">
            Get Now
          </Link>
        </div>
        <div className="serviceImg">
          <img
            src={ServiceImg}
            style={{ height: "250px", width: "100%" }}
            className="card-img-top img-fluid"
            alt="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
