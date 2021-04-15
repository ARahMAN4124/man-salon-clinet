import React, { useContext } from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { myContext } from "../../../App";
import mainLogo from "../../../image/icons8-barbershop-100.png";

const Menubar = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  return (
    <div>
      <Navbar expand="lg" className="menubar fixed-top">
        <Link to="/" className="text-light navbar-brand">
          <img src={mainLogo} className="w-50" alt="" />
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="text-light nav-link">
              Home
            </Link>
            <Link to="/service" className="text-light nav-link">
              Service
            </Link>
            <Link className="text-light nav-link">About</Link>
            <Link className="text-light nav-link">Blog</Link>
            {logInUser.email ? (
              <Link to="/dashboard" className="logInUserImg">
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
    </div>
  );
};

export default Menubar;
