import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import DashboardMain from "../DashboardMain/DashboardMain";
import UserReviewMain from "./UserReviewMain";

const UserReview = () => {
  return (
    <section className="dashboard">
      <div className="">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0">
            <UserReviewMain />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReview;
