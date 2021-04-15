import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const ReviewCarousel = ({ testimonialInfo }) => {
  const { description, img, rating, name } = testimonialInfo;
  return (
    <div className="col-md-4 my-3">
      <div className="testimonialCard d-flex ">
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
          <h6 className="text-light">{description}</h6>
          <small className="text-light">-{name}</small>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
