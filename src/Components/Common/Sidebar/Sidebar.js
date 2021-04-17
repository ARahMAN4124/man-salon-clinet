import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../../image/icons8-barbershop-100.png";
import { useContext } from "react";
import { myContext } from "../../../App";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  const [isAdmin, SetIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://pure-castle-98884.herokuapp.com/admins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logInUser),
    })
      .then((res) => res.json())
      .then((data) => {
        SetIsAdmin(data);
      });
  }, [logInUser]);

  return (
    <section className="sidebar">
      <div className="d-flex justify-content-center">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
      </div>
      {isAdmin ? (
        <div>
          <ul className="nav flex-column pt-5 ps-4">
            <li className="nav-item pt-2">
              <Link to="/adminDashboard" className="nav-link text-light">
                Add Service
              </Link>
            </li>
            <li className="nav-item pt-2">
              <Link to="/orderList" className="nav-link text-light">
                Order List
              </Link>
            </li>
            <li className="nav-item pt-2">
              <Link to="/addAdmin" className="nav-link text-light">
                Make Admin
              </Link>
            </li>
            <li className="nav-item pt-2">
              <Link className="nav-link text-light">Manage Services</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul className="nav flex-column pt-5 ps-4">
            <li className="nav-item pt-2">
              <Link to="/bookingList" className="nav-link text-light">
                Booking List
              </Link>
            </li>
            <li className="nav-item pt-2">
              <Link to="/BookingService" className="nav-link text-light">
                Booking
              </Link>
            </li>
            <li className="nav-item pt-2">
              <Link to="/review" className="nav-link text-light">
                Review
              </Link>
            </li>
          </ul>
        </div>
      )}
      <ul className="nav flex-column pt-2 ps-4">
        <li className="nav-item pt-2">
          <Link to="/" className="nav-link text-light">
            Go Home
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
