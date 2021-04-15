import React from "react";
import { useContext } from "react";
import { myContext } from "../../../../App";
import AdAdminForm from "./AdAdminForm";

const AddAdminMain = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  return (
    <main className="dashboardMain">
      <div className="dashboardMenu d-flex justify-content-between">
        <div>
          <h2>Add Admin</h2>
        </div>
        <div className="logInUserImg mr-5">
          <img src={logInUser.photoURL} alt="" />
        </div>
      </div>
      <div>
        <AdAdminForm />
      </div>
    </main>
  );
};

export default AddAdminMain;
