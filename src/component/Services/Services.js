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
        console.log(data);
      });
  }, []);

  return (
    <div
      style={{
        padding: "30px 60px",
      }}
    >
      <h2>---Our Services--</h2>
      <div className="grid">
        {packs.map((p) => (
          <Service pack={p}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
