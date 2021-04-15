import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import AdminDashboardMain from "../AdminDashBaord/AdminDashboardMain";

const AdminDashBoard = () => {
  return (
    <section className="dashboard">
      <div className="">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0">
            <AdminDashboardMain />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashBoard;
