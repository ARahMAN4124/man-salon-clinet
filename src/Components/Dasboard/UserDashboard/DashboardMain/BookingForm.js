import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { myContext } from "../../../../App";

const BookingForm = ({ OneServiceDetails }) => {
  const [logInUser, setLogInUser] = useContext(myContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const orderOne = { ...data };
    orderOne.serviceName = OneServiceDetails.title;
    orderOne.price = OneServiceDetails.price;
    orderOne.img = OneServiceDetails.ServiceImg;
    orderOne.description = OneServiceDetails.description;
    orderOne.date = new Date();
    fetch("http://localhost:5050/addOrder", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(orderOne),
    }).then((res) => {
      if (res) {
        alert("Successfully Added Your Order");
      }
    });
  };

  return (
    <div className="dashboardOther row">
      <div className="bookingForm col-md-8">
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
                  ? OneServiceDetails.title
                  : "Select a service form services"
              }
              disabled
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
              Buy Now
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default BookingForm;
