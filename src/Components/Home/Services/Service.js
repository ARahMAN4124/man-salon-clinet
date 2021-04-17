import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [serviceLoad, setServiceLoad] = useState([]);

  useEffect(() => {
    fetch("http://https://pure-castle-98884.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceLoad(data);
      });
  }, []);
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
        </div>
        <div className="row pt-5">
          {serviceLoad.map((service, index) => (
            <ServiceCard service={service} key={index + 1}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
