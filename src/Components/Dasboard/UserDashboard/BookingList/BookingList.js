import React from "react";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import BookingListMain from "./BookingListMain";

const BookingList = () => {
  return (
    <section className="dashboard">
      <div className="">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0">
            <BookingListMain />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingList;
