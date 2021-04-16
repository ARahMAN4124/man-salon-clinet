import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ReviewForm = () => {
  const [tesImg, setTesImg] = useState("");

  const testimonialImg = (e) => {
    const tesInfo = new FormData();
    tesInfo.append("key", "de72c60033d44091a0d2c4e2010d3736");
    tesInfo.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", tesInfo)
      .then(function (response) {
        setTesImg(response.data.data.url);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const testimonialInfo = {
      name: data.name,
      description: data.description,
      rating: data.rating,
      designation: data.designation,
      img: tesImg,
    };

    fetch("http://localhost:5050/addTestimonial", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ testimonialInfo }),
    }).then((res) => {
      if (res) {
        alert("Thank You For your review");
      }
    });
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
              {...register("designation", { required: true })}
            />
            {errors.designation && <span>This field is required</span>}
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
          <div className="row form-group">
            <div className="col-md-5">
              <div className="mb-3">
                <label htmlFor="">Rating</label>
                <select
                  className="form-control"
                  {...register("rating", { required: true })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                {errors.rating && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
            <div className="col-md-7">
              <label htmlFor="">Your Image</label>
              <input
                type="file"
                name="img"
                onChange={testimonialImg}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="text-end">
            <button
              disabled={!tesImg}
              type="submit"
              className="btn btn-warning"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default ReviewForm;
