import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { myContext } from "../../../../../App";
import { useForm } from "react-hook-form";

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

  const handleStatusChange = (event, id) => {
    const status = event.target.options[event.target.selectedIndex].text;
    const orderStatus = { status, id };
    fetch(`https://pure-castle-98884.herokuapp.com/orderStatus/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order Status Update Successfully");
        }
      });
  };

  return (
    <main className="">
      <div className="d-flex desMenu justify-content-between">
        <div>
          <h2 className="">Order List</h2>
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
                  <td>Credit Card</td>
                  <td className="text-success">
                    <form
                      onChange={(event) =>
                        handleStatusChange(event, orderList._id)
                      }
                    >
                      <div>
                        <select class="form-select btn btn-warning">
                          <option selected>{orderList.status}</option>
                          <option value="Done">Done</option>
                          <option value="Pending">Pending</option>
                          <option value="On going">On going</option>
                        </select>
                      </div>
                    </form>
                  </td>
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
