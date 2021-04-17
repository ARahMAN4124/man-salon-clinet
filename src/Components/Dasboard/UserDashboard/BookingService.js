import React from "react";
import "./UserDashboard.css";
import Sidebar from "../../Common/Sidebar/Sidebar";
import DashboardMain from "./DashboardMain/DashboardMain";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const BookingService = () => {
  const { id } = useParams();

  const [OneServiceDetails, setOneServiceDetails] = useState([]);

  useEffect(() => {
    fetch("https://pure-castle-98884.herokuapp.com/orderOn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOneServiceDetails(data[0]);
      });
  }, []);

  return (
    <section className="dashboard">
      <div className="">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0">
            <DashboardMain OneServiceDetails={OneServiceDetails} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingService;
