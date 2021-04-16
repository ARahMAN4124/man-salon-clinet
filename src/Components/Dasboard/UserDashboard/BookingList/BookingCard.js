import React from "react";

const BookingCard = ({ userOrder }) => {
  const { name, serviceName, img, description, date } = userOrder;
  //   const orderDate = date.getFullYear();
  return (
    <div className="col-4 ">
      <div className="m-5">
        <div className="card p-3">
          <div>
            <img
              src={img}
              className="img-fluid"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              alt=""
            />
          </div>
          <div className="pt-2">
            <h4>{serviceName}</h4>
          </div>
          <div>
            <p>{description}</p>
            <br />
            <small>- {date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
