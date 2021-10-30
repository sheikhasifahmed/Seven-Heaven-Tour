import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useParams } from "react-router";
import useFirebase from "../../Firebase/useFirebase";
import { Button } from "react-bootstrap";

const PlaceOrder = () => {
  const { _id } = useParams();
  const [booked, setBooked] = useState({});
  const { user } = useFirebase();
  const { displayName, email } = user;
  useEffect(() => {
    fetch(`https://tourism-app-backend.herokuapp.com/place-order/${_id}`)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, []);
  const history = useHistory();
  const { PackageName, Expense } = booked;

  const handlePost = () => {
    let orderData = {
      userName: displayName,
      userEmail: email,
      bookedPackage: PackageName,
      status: "pending",
    };
    fetch("https://tourism-app-backend.herokuapp.com/place-order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderData),
    }).then(() => {
      alert("Congrates! You have successfully booked your tour package");
      history.push("/");
    });
  };

  return (
    <div className="top-space">
      <div className="t-order">
        <h3>Booking Request</h3>
        <table className="my-4 w-100">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{displayName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Package Name</td>
              <td>{PackageName}</td>
            </tr>
            <tr>
              <td>Total Expense</td>
              <td>${Expense}</td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center" }}>
          <Button variant="outline-success" onClick={handlePost}>
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
