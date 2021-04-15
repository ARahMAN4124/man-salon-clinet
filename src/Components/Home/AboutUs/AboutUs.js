import React from "react";
import "./AboutUs.css";
import img1 from "../../../image/pexels-photo-1813272.jpeg";
import img2 from "../../../image/pexels-photo-3998421.jpeg";

const AboutUs = () => {
  return (
    <section className="about py-5">
      <div className="row p-md-0 p-5 about-bg">
        <div className="col-md-6 p-0 align-self-center">
          <div className="ml-md-5 ml-sm-0">
            <h2
              className=" main-text display-4"
              style={{ fontFamily: "Times" }}
            >
              About Us
            </h2>
            <h6 className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              aliquid!
            </h6>
            <p className="text-secondary pt-3 pr-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              doloribus expedita ipsam ipsa tempora accusantium?adipisicing
              elit. Debitis doloribus expedita ipsam ipsa tempora accusantium?
              adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora
              accusantium?
            </p>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <img src={img1} style={{ width: "100%" }} alt="" />
        </div>
      </div>
      <div className="row p-md-0 p-5 about-bg">
        <div className="col-md-6 p-0">
          <img src={img2} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-md-6 p-0 align-self-center">
          <div className="ml-sm-0 ml-md-5 pt-md-0 pt-sm-5">
            <h6 className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              aliquid!
            </h6>
            <p className="text-secondary pt-3 pr-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              doloribus expedita ipsam ipsa tempora accusantium?adipisicing
              elit. Debitis doloribus expedita ipsam ipsa tempora accusantium?
              adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora
              accusantium?
              <br />
              <br />
              Debitis doloribus expedita ipsam ipsa tempora accusantium?
              adipisicing elit. Debitis doloribus expedita ipsam ipsa tempora
              accusantium?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
