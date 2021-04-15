import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../../image/icons8-barbershop-100.png";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="d-flex justify-content-center">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <ul className="nav flex-column pt-2 pl-5">
          <li className="nav-item pt-2">
            <Link to="/dashboard" className="nav-link text-light">
              Book
            </Link>
          </li>

          <li className="nav-item pt-2">
            <Link className="nav-link text-light">Booking List</Link>
          </li>
          <li className="nav-item pt-2">
            <Link to="/review" className="nav-link text-light">
              Review
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="nav flex-column pt-2 pl-5">
          <li className="nav-item pt-2">
            <Link className="nav-link text-light">Order List</Link>
          </li>

          <li className="nav-item pt-2">
            <Link to="/adminDashboard" className="nav-link text-light">
              Add Service
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
      <ul className="nav flex-column pt-2 pl-5">
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
<h2>This is sidebar</h2>;
