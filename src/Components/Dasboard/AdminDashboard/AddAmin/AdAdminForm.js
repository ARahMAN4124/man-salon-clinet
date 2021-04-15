import React from "react";
import { useForm } from "react-hook-form";

const AdAdminForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("A Admin Added Successfully");
  };
  return (
    <div className="dashboardOther row">
      <div className="bookingForm col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group row">
            <div className="col-8">
              <input
                {...register("title", { required: true })}
                className="form-control"
                placeholder="Enter Email"
                type="email"
              />
              {errors.title && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <label htmlFor=""></label>
              <input type="submit" value="SUBMIT" className="btn-main" />
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default AdAdminForm;
