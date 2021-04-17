import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, description, ServiceImg, price } = service;

  return (
    <div className="col-md-3">
      <div className="serviceCard mb-4">
        <Link
          to={`/BookingService/${service._id}`}
          className="cardHover d-flex align-items-center justify-content-center"
        >
          <div className="cardImg">
            <img src={ServiceImg} className="img-fluid" alt="" />

            <div className="">
              <div className="hoverStyle d-flex align-items-center justify-content-center">
                <div>
                  <h4 className="main-text">{title}</h4>
                  <h6 className="text-center main-text mt-4">$ {price}</h6>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* <div className="serviceCard card rounded mb-4">
        <img
          src={ServiceImg}
          style={{ height: "250px", width: "100%" }}
          className="card-img-top img-fluid"
          alt="card-img"
        />
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
      </div> */}
    </div>
  );
};

export default ServiceCard;
