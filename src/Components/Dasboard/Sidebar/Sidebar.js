import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../../image/icons8-barbershop-100.png";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="d-flex justify-content-center">
        <Link className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="nav flex-column pt-2 pl-5">
        <li className="nav-item pt-2">
          <Link className="nav-link text-light">Book</Link>
        </li>

        <li className="nav-item pt-2">
          <Link className="nav-link text-light">Booking List</Link>
        </li>
        <li className="nav-item pt-2">
          <Link className="nav-link text-light">Review</Link>
        </li>
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
