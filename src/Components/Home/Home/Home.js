import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
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
    </div>
  );
};

export default Home;
