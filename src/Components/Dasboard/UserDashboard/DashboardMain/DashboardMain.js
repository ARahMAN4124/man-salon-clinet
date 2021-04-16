import React from "react";
import { useContext } from "react";
import { myContext } from "../../../../App";
import "./DashboardMain.css";
import BookingForm from "./BookingForm";
import PayForm from "../PayForm/PayForm";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IfTqWDWHpMdIYYVcomyFkcyrlQW5OVTG97kTQCmNdEGRkxJYWPYE5k9KuElDwOawUMNnHIouSjtCU6XvgKEHyiw00sFVxAADQ"
);

const DashboardMain = ({ OneServiceDetails }) => {
  const [logInUser, setLogInUser] = useContext(myContext);

  return (
    <main className="dashboardMain">
      <div className="dashboardMenu d-flex justify-content-between">
        <div>
          <h2>Booking</h2>
        </div>
        <div className="logInUserImg me-4">
          <img src={logInUser.photoURL} alt="" />
        </div>
      </div>
      <div className="mt-5 ms-4">
        <div className="paymentCard">
          <Elements stripe={stripePromise}>
            <CardElement />
          </Elements>
          {/* <PayForm /> */}
        </div>
        <BookingForm OneServiceDetails={OneServiceDetails} />
      </div>
    </main>
  );
};

export default DashboardMain;
