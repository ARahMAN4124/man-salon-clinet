import React from "react";
import "./UserDashboard.css";
import Sidebar from "../../Common/Sidebar/Sidebar";
import DashboardMain from "./DashboardMain/DashboardMain";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0">
            <DashboardMain />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
