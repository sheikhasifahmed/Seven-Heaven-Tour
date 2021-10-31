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
        <div className="col-lg-6 col-12 d-flex justify-content-between">
          <NavLink to="/home" className="navstyle" activeStyle={navact}>
            Home
          </NavLink>
          <HashLink
            to="/Home#packages"
            className="navstyle"
            activeStyle={navact}
          >
            Tour Packages
          </HashLink>

          {user.email ? (
            <NavLink
              className="navstyle"
              activeStyle={navact}
              to="/add-package"
            >
              Add Package
            </NavLink>
          ) : (
            <div></div>
          )}
          {user.email ? (
            <NavLink className="navstyle" activeStyle={navact} to="/bookings">
              Manage All Bookings
            </NavLink>
          ) : (
            <div></div>
          )}
          {user.email ? (
            <NavLink
              className="navstyle"
              activeStyle={navact}
              to="/my-bookings"
            >
              My Bookings
            </NavLink>
          ) : (
            <div></div>
          )}
        </div>

        <div className="col-lg-6 col-12">
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
