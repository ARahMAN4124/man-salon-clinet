import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import AdminDashboardMain from "./AddAdminMain";
const AddAdmin = () => {
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

export default AddAdmin;
