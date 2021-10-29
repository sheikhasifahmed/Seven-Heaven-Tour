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
    <div className="top-space" style={{ textAlign: "center" }}>
      <h3>Welcome {displayName}</h3>
      <h3>Your Email {email}</h3>

      <h3>You requested package name : {PackageName}</h3>
      <h3> Total expense: ${Expense}</h3>
      <Button onClick={handlePost}>Confirm Booking</Button>
    </div>
  );
};

export default PlaceOrder;
