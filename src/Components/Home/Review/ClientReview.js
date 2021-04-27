import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ClientReview.css";
import ReviewCarousel from "./ReviewCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ClientReview = () => {
  const [testimonialInfo, setTestimonialInfo] = useState([]);

  useEffect(() => {
    fetch("https://pure-castle-98884.herokuapp.com/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonialInfo(data);
      });
  }, []);

  return (
    <section className="py-4 testimonial">
      <div className="container">
        <div>
          <h2
            className="text-center display-4 main-text py-3"
            style={{ fontFamily: "Times" }}
          >
            Testimonial
          </h2>
        </div>
        <div className="pt-5">
          <Carousel>
            {testimonialInfo.map((testimonialInfo) => (
              <ReviewCarousel
                testimonialInfo={testimonialInfo}
              ></ReviewCarousel>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
