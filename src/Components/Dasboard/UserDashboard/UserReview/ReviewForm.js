import React from "react";
import { useForm } from "react-hook-form";

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("Thank You For your review");
  };
  return (
    <div className="dashboardOther row">
      <div className="bookingForm col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Company's Name,Designation"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-3">
            <textarea
              {...register("description", { required: true })}
              cols="30"
              className="form-control"
              placeholder="Description"
              rows="5"
            ></textarea>
            {errors.description && <span>This field is required</span>}
          </div>
          <div className="mb-3">
            <select
              className="form-control"
              {...register("rating", { required: true })}
            >
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
            {errors.rating && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="mr-0">
            <input type="submit" value="SUBMIT" className="btn-main mr-auto" />
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default ReviewForm;
