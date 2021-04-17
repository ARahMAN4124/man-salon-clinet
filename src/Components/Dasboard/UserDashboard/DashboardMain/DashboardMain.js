import React from "react";
import "./DashboardMain.css";
import { useContext } from "react";
import { myContext } from "../../../../App";
import { useForm } from "react-hook-form";
import PayForm from "../PayForm/PayForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51IfTqWDWHpMdIYYVcomyFkcyrlQW5OVTG97kTQCmNdEGRkxJYWPYE5k9KuElDwOawUMNnHIouSjtCU6XvgKEHyiw00sFVxAADQ"
);

const DashboardMain = ({ OneServiceDetails }) => {
  const [logInUser, setLogInUser] = useContext(myContext);
  const [addOrderDetails, setAddOrderDetails] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const cardData = {
      name: data.name,
      email: data.email,
      price: OneServiceDetails.price,
    };
    setAddOrderDetails(cardData);
  };

  const paymentOrder = (paymentID) => {
    const orderOne = {
      serviceName: OneServiceDetails.title,
      price: OneServiceDetails.price,
      img: OneServiceDetails.ServiceImg,
      paymentCardId: paymentID,
      description: OneServiceDetails.description,
      date: new Date(),
      email: addOrderDetails.email,
      name: addOrderDetails.name,
    };

    fetch("http://localhost:5050/addOrder", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(orderOne),
    }).then((res) => {
      if (res) {
        alert("Booking Successfully");
      }
    });
  };

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
        <div className="dashboardOther row">
          <div
            style={{ display: addOrderDetails ? "none" : "block" }}
            className="bookingForm col-md-8"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  type="name"
                  defaultValue={logInUser.displayName}
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  defaultValue={logInUser.email}
                  readOnly
                  className="form-control"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  defaultValue={
                    OneServiceDetails
                      ? OneServiceDetails?.title
                      : "Select a service form services"
                  }
                  readOnly
                  className="form-control"
                  {...register("serviceName")}
                />
                {errors.serviceName && <span>This field is required</span>}
              </div>
              <div></div>
              <div className="text-end">
                <button
                  disabled={!OneServiceDetails}
                  type="submit"
                  value="Get"
                  className="btn btn-warning"
                >
                  Process
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div
          style={{ display: addOrderDetails ? "block" : "none" }}
          className="paymentCard dashboardOther"
        >
          <Elements stripe={stripePromise}>
            <PayForm
              price={addOrderDetails.price}
              paymentOrder={paymentOrder}
            ></PayForm>
          </Elements>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
