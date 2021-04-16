import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../../../../App";
import BookingCard from "./BookingCard";

const BookingListMain = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  const [userOrder, setUserOrder] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/orderList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: logInUser.email }),
    })
      .then((res) => res.json())
      .then((orderList) => {
        setUserOrder(orderList);
      });
  }, []);

  return (
    <main className="dashboardMain">
      <div className="dashboardMenu d-flex justify-content-between">
        <div>
          <h2>Your Booked List</h2>
        </div>
        <div className="logInUserImg me-4">
          <img src={logInUser.photoURL} alt="" />
        </div>
      </div>
      <div>
        <div className="row">
          {userOrder.map((userOrder, i) => (
            <BookingCard key={i + 1} userOrder={userOrder}></BookingCard>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BookingListMain;
