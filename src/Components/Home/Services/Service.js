import React from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";

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
        <h2
          className="text-center display-4 main-text"
          style={{ fontFamily: "Times" }}
        >
          Services
        </h2>
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
