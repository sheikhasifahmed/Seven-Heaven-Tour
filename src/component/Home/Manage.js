import React from "react";
import { Link } from "react-router-dom";
import mng from "../../images/m.png";

const Manage = () => {
  return (
    <div id="manage-booking" className="px-5 cont">
      <div className="row">
        <div className="col-lg-5">
          <img className="img-fluid" src={mng} alt="" />
        </div>
        <div className="col-lg-7 px-5 my-auto">
          <h2 className="mb-3 clr">Manage Your Bookings</h2>

          <h5 className="mb-3">
            Now, you can manage your bookings very easily. You can see All your
            bookings. You can find out wether any booking is approved by the
            admin or not. If the status of the booking is "pending" it means,
            yet to approve by the admin. After approved by the admin the status
            will change into "Approved". You can also, cancel your bookings at
            any time.{" "}
          </h5>
          <h5 className="my-2">
            To manage your bookings you must be logged in. To manage your id
            click here to <Link to="/my-bookings">Manage Your Bookings</Link>
          </h5>
          <h5 className="my-2">
            {" "}
            If you are'nt logged in click to{" "}
            <Link to="/login">Login your account</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Manage;
