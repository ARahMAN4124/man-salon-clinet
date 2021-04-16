import React from "react";
import Footer from "../../Common/Footer/Footer";
import Service from "../../Home/Services/Service";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

const ServicePage = () => {
  return (
    <section>
      <ServiceHeader />
      <Service />
      <Footer />
    </section>
  );
};

export default ServicePage;
