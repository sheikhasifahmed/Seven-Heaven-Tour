import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { useHistory } from "react-router";

const Service = (props) => {
  const { _id, PackageName, Time, Expense, image, Type } = props.pack;
  const history = useHistory();

  const handleBook = () => {
    history.push(`/place-order/${_id}`);
  };
  return (
    <div className="row single">
      <div className="col-lg-6 me-auto">
        <img width="320" height="230" src={image} alt="" />
      </div>
      <div className="col-lg-5 ms-auto">
        <h3 className="mb-3">{PackageName}</h3>
        <h5>{Type}</h5>
        <h5>Daylong: {Time}</h5>
        <h5
          style={{
            backgroundColor: "lightslategrey",
            textAlign: "center",
            color: "white",
            padding: "7px 5px",
            borderRadius: "5px",
          }}
        >
          Expense: ${Expense}
        </h5>
        <div className="mt-3">
          <Button variant="outline-primary" onClick={handleBook}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
