import React from "react";
import "./Footer.css";
import FooterCol from "./FooterCol";

const Footer = () => {
  const address = [
    {
      name: "H#20,Road#1,Muslimabad,Patenga",
      link: " ",
    },
    {
      name: "Chittagong,Bangladesh",
      link: " ",
    },
  ];
  const Company = [
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Our Team", link: "/team" },
    { name: "Terms Conditions", link: "/termsCondition" },
  ];
  const QuickLink = [
    { name: "Link One", link: "/link" },
    { name: "Link Two", link: "/link" },
    { name: "Link Three", link: "/link" },
    { name: "Link four", link: " " },
  ];
  const SocialLink = [
    {
      name:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, culpa!",
      link: " ",
    },
  ];

  return (
    <div className="footer py-5 ">
      <div className="container">
        <div className="row">
          <FooterCol key="1" titleName=" " MenuItem={address}></FooterCol>
          <FooterCol key="2" titleName="Company" MenuItem={Company}></FooterCol>
          <FooterCol
            key="3"
            titleName="QuickLink"
            MenuItem={QuickLink}
          ></FooterCol>
          <FooterCol
            key="4"
            titleName="About Us"
            MenuItem={SocialLink}
          ></FooterCol>
        </div>
      </div>
    </div>
  );
};

export default Footer;
