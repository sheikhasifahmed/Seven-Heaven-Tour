import React, { useEffect, useState } from "react";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://tourism-app-backend.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="top-space">
      <h1>Welcome to manage bookings </h1>
      <div>
        {bookings.map((b) => (
          <h1>{b.bookedPackage}</h1>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;
