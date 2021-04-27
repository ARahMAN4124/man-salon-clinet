import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const ServiceCard = ({ service }) => {
  const { title, ServiceImg, price } = service;
  AOS.init({
    duration: 10000,
  });

  return (
    <div className="col-md-3">
      <div className="serviceCard mb-4">
        <Link
          to={`/BookingService/${service._id}`}
          className="cardHover d-flex align-items-center justify-content-center"
        >
          <div className="cardImg">
            <img
              src={ServiceImg}
              data-aos="fade-right"
              className="img-fluid"
              alt=""
            />

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
    </div>
  );
};

export default ServiceCard;
