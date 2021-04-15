import React from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import devider from "../../../image/icons8-hercule-poirot-mustache-80.png";

const Service = () => {
  const service = [
    {
      name: "Hair Cut",
      img: "",
      description:
        "Lorem ipsum dolor sit ipsum dolor sit  ipsum dolor sit ipsum dolor sit ",
    },
    {
      name: "Shaving",
      img: "",
      description:
        "Lorem ipsum dolor sit ipsum dolor sit  ipsum dolor sit ipsum dolor sit ",
    },
    {
      name: "coloring",
      img: "",
      description:
        "Lorem ipsum dolor sit ipsum dolor sit  ipsum dolor sit ipsum dolor sit ",
    },
    {
      name: "coloring",
      img: "",
      description:
        "Lorem ipsum dolor sit ipsum dolor sit  ipsum dolor sit ipsum dolor sit ",
    },
    {
      name: "Shaving",
      img: "",
      description:
        "Lorem ipsum dolor sit ipsum dolor sit  ipsum dolor sit ipsum dolor sit ",
    },
    {
      name: "Hair Cut",
      img: "",
      description:
        "Lorem ipsum dolor sit ipsum dolor sit  ipsum dolor sit ipsum dolor sit ",
    },
  ];
  return (
    <section className="service py-5">
      <div className="container">
        <div className="text-center">
          <h2
            className=" display-4 m-0 p-0  main-text"
            style={{ fontFamily: "Times" }}
          >
            Services
          </h2>
          {/* <img
            className="m-0 p-0 img-fluid"
            style={{ width: "120px" }}
            src={devider}
            alt=""
          /> */}
        </div>
        <div className="row pt-5">
          {service.map((service, index) => (
            <ServiceCard service={service} key={index + 1}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
