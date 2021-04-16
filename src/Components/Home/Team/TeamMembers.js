import React from "react";

const TeamMembers = ({ teamMember, handleTeamMember }) => {
  return (
    <div className=" col-4 ">
      <img
        src={teamMember.img}
        onClick={() => handleTeamMember(teamMember)}
        className="teamCardImg "
        alt=""
      />
    </div>
  );
};

export default TeamMembers;
