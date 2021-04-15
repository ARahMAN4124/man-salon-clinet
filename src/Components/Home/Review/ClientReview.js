import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ClientReview.css";
import ReviewCarousel from "./ReviewCarousel";

const ClientReview = () => {
  const [testimonialInfo, setTestimonialInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/testimonials")
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
        <div>
          <div className="row">
            {testimonialInfo.map((testimonialInfo) => (
              <ReviewCarousel
                key={testimonialInfo._id}
                testimonialInfo={testimonialInfo}
              ></ReviewCarousel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
