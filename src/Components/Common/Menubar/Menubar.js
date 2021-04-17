import React, { useContext } from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { myContext } from "../../../App";
import mainLogo from "../../../image/icons8-barbershop-100.png";
import { useEffect } from "react";
import { useState } from "react";

const Menubar = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  const [isAdmin, SetIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://https://pure-castle-98884.herokuapp.com/admins", {
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
    <nav className="container">
      <Navbar expand="lg" className="menubar fixed-top">
        <Link to="/" className="text-light navbar-brand ">
          <img src={mainLogo} className="w-50 ms-4" alt="" />
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4">
            <Link to="/" className="text-light nav-link">
              Home
            </Link>
            <Link to="/service" className="text-light nav-link">
              Service
            </Link>
            <Link className="text-light nav-link">About</Link>
            <Link className="text-light nav-link">Blog</Link>
            {logInUser.email ? (
              <Link
                to={isAdmin ? "/adminDashboard" : "/bookingList"}
                className="logInUserImg"
              >
                <img src={logInUser.photoURL} alt="" />
              </Link>
            ) : (
              <Link to="/logIn" className="btn-main">
                LogIn
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Menubar;
