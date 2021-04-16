import React from "react";
import "./ServicePageHeader.css";
import Menubar from "../../Common/Menubar/Menubar";
import ServiceHeaderMain from "./ServiceHeaderMain/ServiceHeaderMain";

const ServiceHeader = () => {
  return (
    <section className="serviceHeader">
      <Menubar></Menubar>
      <ServiceHeaderMain />
    </section>
  );
};

export default ServiceHeader;
