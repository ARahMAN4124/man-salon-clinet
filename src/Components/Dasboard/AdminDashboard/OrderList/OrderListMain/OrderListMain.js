import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { myContext } from "../../../../../App";

const OrderListMain = () => {
  const [logInUser, setLogInUser] = useContext(myContext);

  const [allOrderList, setAllOrderList] = useState([]);
  useEffect(() => {
    fetch("https://pure-castle-98884.herokuapp.com/orderList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: logInUser.email }),
    })
      .then((res) => res.json())
      .then((orderList) => {
        setAllOrderList(orderList);
      });
  }, [logInUser]);

  console.log(allOrderList);

  return (
    <main className="">
      <div className="d-flex desMenu justify-content-between">
        <div>
          <h2 className="">Add Service</h2>
        </div>
        <div className="logInUserImg me-5">
          <img src={logInUser.photoURL} alt="" />
        </div>
      </div>
      <div className="">
        <div className="bookingMain">
          <table className="table table-dark table-striped">
            <thead>
              <tr className="">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Service</th>
                <th scope="col">Pay With</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrderList.map((orderList, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{orderList.name}</td>
                  <td>{orderList.email}</td>
                  <td>{orderList.serviceName}</td>
                  <td>Creadit Card</td>
                  <td className="text-success">Done</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default OrderListMain;
