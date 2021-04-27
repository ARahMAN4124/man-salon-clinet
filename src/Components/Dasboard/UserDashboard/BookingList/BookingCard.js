import React from "react";

const BookingCard = ({ userOrder }) => {
  const { serviceName, img, description, date, status } = userOrder;
  return (
    <div className="col-4 ">
      <div className="m-5">
        <div className="card p-3">
          <div className="row">
            <div className="col">
              <div>
                <img
                  src={img}
                  className="img-fluid"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col">
              <button className="btn btn-warning">{status}</button>
            </div>
          </div>
          <div className="pt-2">
            <h4>{serviceName}</h4>
          </div>
          <div>
            <p>{description}</p>
            <small>- {date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
