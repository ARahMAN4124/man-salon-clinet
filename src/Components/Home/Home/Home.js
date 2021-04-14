import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import Header from "../Header/Header";
import Service from "../Services/Service";

const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <AboutUs />
      <Blog />
    </div>
  );
};

export default Home;
