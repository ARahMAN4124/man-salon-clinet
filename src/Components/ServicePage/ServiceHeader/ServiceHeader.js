import React from "react";
import Menubar from "../../Common/Menubar/Menubar";
import ServiceHeaderMain from "./ServiceHeaderMain/ServiceHeaderMain";

const ServiceHeader = () => {
  return (
    <section className="homeHeader">
      <Menubar></Menubar>
      <ServiceHeaderMain />
    </section>
  );
};

export default ServiceHeader;
