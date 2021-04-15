import React from "react";
import { useForm } from "react-hook-form";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";

const BookingForm = () => {
  const stripePromise = loadStripe(
    "pk_test_51IfTqWDWHpMdIYYVcomyFkcyrlQW5OVTG97kTQCmNdEGRkxJYWPYE5k9KuElDwOawUMNnHIouSjtCU6XvgKEHyiw00sFVxAADQ"
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="dashboardOther row">
      <div className="bookingForm col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              type="name"
              className="form-control"
              value="name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              value="name"
              className="form-control"
              readOnly
              disabled
              {...register("serviceName", { required: true })}
            />
            {errors.serviceName && <span>This field is required</span>}
          </div>
          <div>
            <Elements stripe={stripePromise}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </Elements>
          </div>
          <div className="mr-0">
            <input type="submit" value="Get" className="btn-main mr-auto" />
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default BookingForm;
