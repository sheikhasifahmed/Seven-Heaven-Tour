import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./Service";

const Services = () => {
  const [packs, setPacks] = useState([]);
  useEffect(() => {
    fetch("https://tourism-app-backend.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setPacks(data);
      });
  }, []);

  return (
    <div
      id="packages"
      className="cont"
      style={{
        padding: "20px 30px",
      }}
    >
      <h2 style={{ textAlign: "center" }} className="mb-5 clr">
        ---Our Tour Packages--
      </h2>
      <div className="grid">
        {packs.map((p) => (
          <Service pack={p}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
