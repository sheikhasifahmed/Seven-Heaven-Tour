import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "bootstrap/dist/css/bootstrap.min.css";
import useFirebase from "../../Firebase/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();

  const navact = { textDecoration: "none", color: "red", fontWeight: "700" };
  return (
    <div className="header">
      <nav className="row">
        <div className="col-lg-7 d-flex justify-content-between">
          <NavLink to="/home" className="navstyle" activeStyle={navact}>
            Home
          </NavLink>
          <HashLink
            to="/Home#services"
            className="navstyle"
            activeStyle={navact}
          >
            Services
          </HashLink>

          <NavLink to="/place-order" className="navstyle" activeStyle={navact}>
            Place Order
          </NavLink>
          <NavLink to="/add-service" className="navstyle" activeStyle={navact}>
            Add Service
          </NavLink>
          <NavLink
            to="/manage-services"
            className="navstyle"
            activeStyle={navact}
          >
            Manage Services
          </NavLink>
        </div>

        <div className="col-lg-5">
          {user.email ? (
            <div className="d-flex justify-content-end align-items-center">
              <div className="pe-2" style={{ fontSize: "large" }}>
                {user.displayName}
              </div>

              <Button variant="outline-light" onClick={logOut}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="d-flex justify-content-end">
              <NavLink className="navstyle" activeStyle={navact} to="/login">
                Login
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
