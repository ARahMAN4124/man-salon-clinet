import React from "react";
import Footer from "../../Common/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import Header from "../Header/Header";
import ClientReview from "../Review/ClientReview";
import Service from "../Services/Service";
import OurTeam from "../Team/OurTeam";

const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <AboutUs />
      <Blog />
      <OurTeam />
      <ClientReview />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
