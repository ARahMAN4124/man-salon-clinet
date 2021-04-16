import React from "react";
import "./HeaderMain.css";
import { Link } from "react-router-dom";
import homeHeaderImg from "../../../../image/pexels-photo-3998421.jpeg";

const HeaderMain = () => {
  return (
    <header className="homeHeader py-5">
      <div className="container-fluid pt-5">
        <div className="row mx-5 d-flex align-items-center">
          <div className="col-md-6">
            <h1 className="main-text display-4" style={{ fontFamily: "Times" }}>
              Enjoy the highest Quality of man's Grooming
            </h1>
            <p className="text-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur perferendis pariatur, iste magnam, excepturi adipisci
              dicta laudantium eum, perspiciatis ea reiciendis! Minima
              repellendus a quod suscipit velit quidem, ab, ducimus, quia autem
              laboriosam dolor dolorem ipsa hic quae doloremque incidunt
              perspiciatis.
            </p>
            <Link to="/service" className="btn-main">
              Booking Now
            </Link>
          </div>
          <div className="col-md-6">
            <div className="mt-5">
              <img src={homeHeaderImg} className="img-fluid rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
