import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  // const { user, logOut } = useFirebase();

  const navact = { textDecoration: "none", color: "red", fontWeight: "700" };
  return (
    <div className="header">
      <nav className="row">
        <div className="col-lg-6 d-flex justify-content-between">
          <NavLink to="/home" className="navstyle" activeStyle={navact}>
            Home
          </NavLink>
          <NavLink to="/services" className="navstyle" activeStyle={navact}>
            Services
          </NavLink>
          <NavLink to="/aboutUs" className="navstyle" activeStyle={navact}>
            About Us
          </NavLink>
          <NavLink to="/appoinment" className="navstyle" activeStyle={navact}>
            Appoinment
          </NavLink>
        </div>

        {/* <div className="col-lg-6">
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
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
