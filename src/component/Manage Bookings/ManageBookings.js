import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://tourism-app-backend.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://tourism-app-backend.herokuapp.com/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        const remainig = bookings.filter((booking) => booking._id !== id);
        setBookings(remainig);
      })
      .catch((error) => console.log(error));
  };

  const handleApprove = (id) => {
    const Approved = bookings.find((b) => b._id === id);

    Approved.status = "Approved";

    fetch(`https://tourism-app-backend.herokuapp.com/bookings/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Approved),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) alert("Booking Approved by Admin");
        const remaining = bookings.filter((b) => b._id !== id);
        const newBookings = [...remaining, Approved];
        setBookings(newBookings);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="top-space">
      <div
        className="t-order w-100 table-responsive"
        style={{ marginBottom: "150px" }}
      >
        <h3>Manage All Bookings as Admin </h3>
        <table className="my-4 w-100 ">
          <thead>
            {/* <th>Booking No.</th> */}
            <th>Booking Id</th>
            <th>Tourist Name</th>
            <th>Tour Package</th>
            <th>Order Status</th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr>
                {/* <td>{bookings.indexOf(b) + 1}</td> */}
                <td>
                  <small>{b._id}</small>
                </td>

                <td>{b.userName}</td>
                <td>{b.bookedPackage}</td>
                <td>{b.status}</td>
                <td>
                  {b.status === "Approved" || (
                    <Button
                      onClick={() => handleApprove(b._id)}
                      variant="outline-success"
                    >
                      Approve
                    </Button>
                  )}
                </td>
                <td>
                  <Button
                    onClick={() => handleDelete(b._id)}
                    variant="outline-danger"
                  >
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
