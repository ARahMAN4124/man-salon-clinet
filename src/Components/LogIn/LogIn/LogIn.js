import React, { useContext } from "react";
import "./LogIn.css";
import Menubar from "../../Common/Menubar/Menubar";
import logo from "../../../image/icons8-barbershop-100.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import icon from "../../../image/Group 573.png";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../Config";
import { myContext } from "../../../App";

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  const [logInUser, serLogInUser] = useContext(myContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const logInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        serLogInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <section className="logIn">
      <div>
        <Menubar />
      </div>
      <div className="container-fluid logInMain d-flex align-items-center justify-content-center">
        <div className="">
          <div>
            <img src={logo} style={{ width: "200px" }} alt="" />
          </div>
          <div>
            <h2 className="text-light">Login With</h2>
          </div>
          <div className="pt-5">
            <Link onClick={logInWithGoogle} className="second-btn py-3">
              <img
                src={icon}
                className="me-5"
                style={{ width: "30px" }}
                alt=""
              />
              Continue With Google
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
