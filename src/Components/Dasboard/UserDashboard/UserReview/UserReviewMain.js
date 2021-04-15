import React from "react";
import { useContext } from "react";
import { myContext } from "../../../../App";
import ReviewForm from "./ReviewForm";

const UserReviewMain = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  return (
    <main className="dashboardMain">
      <div className="dashboardMenu d-flex justify-content-between">
        <div>
          <h2>Booking</h2>
        </div>
        <div className="logInUserImg mr-5">
          <img src={logInUser.photoURL} alt="" />
        </div>
      </div>
      <div>
        <ReviewForm />
      </div>
    </main>
  );
};

export default UserReviewMain;
