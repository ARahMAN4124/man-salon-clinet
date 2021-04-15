import React from "react";
import { useForm } from "react-hook-form";

const AddServiceForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Your Service Added Successfully");
  };
  return (
    <div className="dashboardOther row">
      <div className="bookingForm col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group row">
            <div className="col-6">
              <label htmlFor="">Service Title</label>
              <input
                {...register("title", { required: true })}
                className="form-control"
                placeholder="Enter title"
                type="text"
              />
              {errors.title && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-3">
              <label htmlFor="">Price</label>
              <input
                {...register("price", { required: true })}
                className="form-control"
                placeholder="Price"
                type="number"
              />
              {errors.price && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-3">
              <label htmlFor="">Image</label>
              <input
                {...register("img", { required: true })}
                className="form-control"
                type="file"
              />
              {errors.img && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="mb-3">
            <textarea
              {...register("description", { required: true })}
              cols="30"
              className="form-control"
              placeholder="Enter Description"
              rows="5"
            ></textarea>
            {errors.description && <span>This field is required</span>}
          </div>
          <div className="text-right">
            <input type="submit" value="SUBMIT" className="btn-main mr-auto" />
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default AddServiceForm;
