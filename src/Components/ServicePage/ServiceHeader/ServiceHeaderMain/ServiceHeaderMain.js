import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ServiceHeaderMain = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <header className="serviceHeaderMain py-5">
      <div className="container-fluid">
        <div className="row mx-5 d-flex align-items-center">
          <div className="col-md-6">
            <h1 className="main-text display-4" style={{ fontFamily: "Times" }}>
              You Can Rely on US
            </h1>
            <p className="text-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur perferendis pariatur, iste magnam, excepturi adipisci
              dicta laudantium eum, perspiciatis ea reiciendis! Minima
              repellendus a quod suscipit velit quidem, ab, ducimus, quia autem
              laboriosam dolor dolorem ipsa hic quae doloremque incidunt
              perspiciatis.
            </p>
          </div>
          <div className="col-md-6">
            <div className="mt-5">
              <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ServiceHeaderMain;
