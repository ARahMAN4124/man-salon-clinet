import React from "react";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import ServiceManageMain from "./ServiceManageMain";

const ServiceManage = () => {
  return (
    <section className="dashboard">
      <div className="">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0">
            <ServiceManageMain />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceManage;
