import React from "react";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Your Message send successfully");
  };
  return (
    <div>
      <form className="contactForm py-3" onSubmit={handleSubmit(onSubmit)}>
        <div class="row mb-3">
          <div class="col form-floating">
            <input
              type="text"
              id="floatingInput"
              {...register("FirstName", { required: true })}
              class="form-control"
              placeholder="First name"
            />
            <label for="floatingInput" className="ms-2">
              First Name
            </label>
            {errors.FirstName && (
              <span className="text-danger">First Name is required</span>
            )}
          </div>
          <div class="col form-floating">
            <input
              type="text"
              id="floatingInput"
              {...register("LastName", { required: true })}
              class="form-control"
              placeholder="Last name"
            />
            <label for="floatingInput" className="ms-2">
              Last Name
            </label>
            {errors.LastName && (
              <span className="text-danger"> Last Name is required</span>
            )}
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-8 form-floating">
            <input
              type="email"
              id="floatingInput"
              {...register("email", { required: true })}
              class="form-control"
              placeholder="Email"
            />
            <label for="floatingInput" className="ms-2">
              Enter Email
            </label>
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
          </div>
          <div class="col-4 form-floating">
            <input
              type="tel"
              id="floatingInput"
              {...register("phone", { required: true })}
              class="form-control"
              placeholder="Phone number"
            />
            <label for="floatingInput" className="ms-2">
              Phone
            </label>
            {errors.phone && (
              <span className="text-danger">Phone Number is required</span>
            )}
          </div>
        </div>
        <div class="row mb-3">
          <div class="col form-floating">
            <textarea
              id="floatingInput"
              class="form-control"
              placeholder="Message"
              {...register("message", { required: true })}
              cols="30"
              rows="10"
            ></textarea>

            <label for="floatingInput" className="ms-2">
              Enter Message
            </label>
            {errors.message && (
              <span className="text-danger"> Message is required</span>
            )}
          </div>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn-main">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
