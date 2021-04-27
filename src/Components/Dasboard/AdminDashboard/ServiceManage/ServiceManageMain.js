import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../../../App";
import DeleteIcon from "@material-ui/icons/Delete";

const ServiceManageMain = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  const [serviceLoad, setServiceLoad] = useState([]);

  useEffect(() => {
    fetch("https://pure-castle-98884.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceLoad(data);
      });
  }, [logInUser]);

  const handleServiceDelete = (id) => {
    fetch(`http://localhost:5050/deletedService/` + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Service deleted successfully");
        }
      });
  };

  return (
    <main className="">
      <div className="d-flex desMenu justify-content-between">
        <div>
          <h2 className="">Service Management</h2>
        </div>
        <div className="logInUserImg me-5">
          <img src={logInUser.photoURL} alt="" />
        </div>
      </div>
      <div className="bookingMain">
        <div className="row serviceCard mx-auto pt-5">
          {serviceLoad.map((service, index) => (
            <div className="col-4 ">
              <div className="m-3">
                <div className="card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <img
                        src={service.ServiceImg}
                        className="img-fluid"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <button
                        onClick={() => handleServiceDelete(service._id)}
                        className="btn btn-warning"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                  <div className="pt-2 d-flex justify-content-between align-items-center">
                    <h4>{service.title}</h4>
                    <h6>-${service.price}</h6>
                  </div>
                  <div>
                    <p>{service.description}</p>
                    <small>- {service.adminName}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServiceManageMain;
