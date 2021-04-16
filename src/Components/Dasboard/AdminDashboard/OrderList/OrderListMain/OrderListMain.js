import React from "react";
import { useContext } from "react";
import { myContext } from "../../../../../App";

const OrderListMain = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  return (
    <main className="dashboardMain">
      <div className="dashboardMenu d-flex justify-content-between">
        <div>
          <h2>Add Service</h2>
        </div>
        <div className="logInUserImg me-5">
          <img src={logInUser.photoURL} alt="" />
        </div>
      </div>
      <div>
        <h2>lasjdflksjfs</h2>
      </div>
    </main>
  );
};

export default OrderListMain;
