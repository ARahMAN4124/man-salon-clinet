import React from "react";
import { useContext } from "react";
import { myContext } from "../../../../App";
import AddServiceForm from "./AddServiceForm";

const AdminDashboardMain = () => {
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
        <AddServiceForm />
      </div>
    </main>
  );
};

export default AdminDashboardMain;
