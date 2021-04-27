import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const ReviewCarousel = ({ testimonialInfo }) => {
  const { description, img, rating, name } = testimonialInfo;
  return (
    <div className="testimonialCard text-left">
      <div className="d-flex ">
        <div className="mx-2">
          <img
            src={img}
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div className="mx-2">
          <Box component="fieldset" borderColor="transparent">
            <Rating name="read-only" value={rating} readOnly />
          </Box>

          <small className="text-light">-{name}</small>
        </div>
      </div>
      <div className="text-light text-justify  mt-2">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewCarousel;
