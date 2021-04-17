import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { myContext } from "../../../../App";

const AddServiceForm = () => {
  const [logInUser, setLonInUser] = useContext(myContext);
  const [imgUrl, setImgUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleServiceImg = (e) => {
    const imgData = new FormData();
    imgData.append("key", "de72c60033d44091a0d2c4e2010d3736");
    imgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgUrl(response.data.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const serviceInfo = {
      adminName: logInUser.displayName,
      title: data.title,
      ServiceImg: imgUrl,
      price: data.price,
      description: data.description,
    };

    fetch("https://pure-castle-98884.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ serviceInfo }),
    }).then((res) => {
      if (res) {
        alert("Your Service Added Successfully");
      }
    });
  };
  return (
    <div className="dashboardOther row">
      <div className="bookingForm col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group row mb-3">
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
                onChange={handleServiceImg}
                className="form-control"
                type="file"
              />
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
          <div className="text-end">
            <input
              disabled={!imgUrl}
              type="submit"
              value="SUBMIT"
              className="btn btn-warning"
            />
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default AddServiceForm;
