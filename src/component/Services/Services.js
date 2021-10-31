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
      {packs.length ? (
        <div>
          <h2 style={{ textAlign: "center" }} className="mb-5 clr">
            ---Our Tour Packages--
          </h2>
          <div className="grid">
            {packs.map((p) => (
              <Service pack={p}></Service>
            ))}
          </div>
        </div>
      ) : (
        <div className="loader">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
          <h3>Please Wait...</h3>
        </div>
      )}
    </div>
  );
};

export default Services;
