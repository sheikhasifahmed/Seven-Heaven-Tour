import React from "react";
import bannerPic from "../../images/bannerPic.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  const history = useHistory();

  const handleAbout = () => {
    history.push("/aboutUs");
  };

  return (
    <div className="banner">
      <div className="mx-auto my-auto">
        <img src={bannerPic} alt="" />
      </div>
      <div className="banner-text mx-auto my-auto">
        <h1 className="mb-5">Seven Heaven Tours</h1>
        <h3>
          We take you to
          <br />
          wherever your dreams go
        </h3>
        <div className="d-flex justify-content-start">
          <Button className="m-3" variant="outline-light" onClick={handleAbout}>
            About Us
          </Button>
          <HashLink to="/home#services">
            <Button className="m-3" variant="outline-light">
              Services
            </Button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
