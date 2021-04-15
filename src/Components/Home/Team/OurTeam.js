import React from "react";
import "./Team.css";
import img1 from "../../../image/abdur rahman02.jpg";
import img2 from "../../../image/23120201_1928642204066832_3238038286303706311_o.jpg";
import img3 from "../../../image/IMG_4767.JPG";
import TeamMembers from "./TeamMembers";
import { useState } from "react";

const OurTeam = () => {
  const team = [
    {
      name: "Abdur",
      rule: "owner",
      img: img1,
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet omnis laboriosam et illum voluptas.",
    },
    {
      name: "Jabed",
      rule: "barber",
      img: img2,
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet omnis laboriosam et illum voluptas.",
    },
    {
      name: "Razu",
      rule: "barber",
      img: img3,
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet omnis laboriosam et illum voluptas.",
    },
  ];
  const [teamMember, setTeamMember] = useState(team[0]);
  const handleTeamMember = (member) => {
    setTeamMember(member);
  };

  return (
    <section className="team.Member py-3 pb-5 about-bg">
      <div className="container">
        <h2
          className="text-center display-4 main-text py-5"
          style={{ fontFamily: "Times" }}
        >
          Team
        </h2>
        <div className="row">
          <div className="col-md-6">
            <img src={teamMember.img} className="teamMainImg" alt="" />
          </div>
          <div className="col-md-6">
            <h2
              className="teamText text-light display-4"
              style={{ fontFamily: "times" }}
            >
              {teamMember.name}
            </h2>
            <p className="main-text">-{teamMember.rule}</p>
            <p className="text-secondary">{teamMember.describe}</p>
            <div className="row">
              {team.map((teamMember, index) => (
                <TeamMembers
                  key={index + 1}
                  teamMember={teamMember}
                  handleTeamMember={handleTeamMember}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
