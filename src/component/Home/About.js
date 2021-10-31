import React from "react";
import tour from "../../images/Tour.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div id="about" className="px-5 cont">
      <h2 className="mb-3 clr">About Us</h2>
      <div className="row">
        <div className="col-lg-5">
          <img className="img-fluid" src={tour} alt="" />
        </div>
        <div className="col-lg-7 px-5">
          <h5 className="mb-3">
            <span className="h3" style={{ color: "goldenrod" }}>
              Seven Heaven Tours
            </span>{" "}
            is the where your dream comes true. We give you the best tour
            packages in a very affordable cost.
          </h5>
          <h5 className="mb-3">
            Our Service is completely available on online. You have to just
            login with your id and select your dream tour package. Then give us
            necessary information. We will prepare all of the necessary steps
            and contact you. We have our contact number below the website. But,
            you can also come to our office dirctly. It is situated at the heart
            of the city beside the city center. Any type of vehicle is suitable
            to reach here. For the
            <br />
            You can find the location on{" "}
            <a href="https://www.google.com/maps">google map</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
