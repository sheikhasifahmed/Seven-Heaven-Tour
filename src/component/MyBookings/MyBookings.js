import React, { useEffect } from "react";

const MyBookings = () => {
  useEffect(() => {
    fetch(`https://tourism-app-backend.herokuapp.com/my-bookings`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="top-space">
      <h1>Here is your bookings</h1>
    </div>
  );
};

export default MyBookings;
