import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useFirebase from "../../Firebase/useFirebase";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useFirebase();
  console.log(user);
  const { email, displayName } = user;
  useEffect(() => {
    if (email) {
      fetch(`https://tourism-app-backend.herokuapp.com/my-bookings/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
        })
        .catch((error) => console.log(error));
    }
  }, [email]);

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

  return (
    <div className="top-space">
      <div
        className="t-order w-100 table-responsive"
        style={{ marginBottom: "150px" }}
      >
        <h3 className="clr text-center">Your Bookings</h3>
        <table className="my-4 w-100 ">
          <thead>
            {/* <th>Booking No.</th> */}
            <th>Booking Id</th>
            <th>Tourist Name</th>
            <th>Tour Package</th>
            <th>Order Status</th>
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
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDelete(b._id)}
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

export default MyBookings;
