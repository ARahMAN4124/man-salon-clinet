import React from "react";
import "./Header.css";
import HeaderMain from "./HeaderMain/HeaderMain";
import Menubar from "../../Common/Menubar/Menubar";

const Header = () => {
  return (
    <div className="homeHeader">
      <Menubar />
      <HeaderMain />
    </div>
  );
};

export default Header;
