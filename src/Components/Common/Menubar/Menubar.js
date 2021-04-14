import React from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Menubar = () => {
  return (
    <div>
      <Navbar expand="lg" className="menubar fixed-top">
        <Navbar.Brand to="/" className="text-light">
          React-Bootstrap
        </Navbar.Brand>
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
            <Link className="btn-main">Search</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menubar;
