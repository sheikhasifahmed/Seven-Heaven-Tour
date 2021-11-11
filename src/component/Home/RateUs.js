import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Button } from "react-bootstrap";
import useFirebase from "../../Firebase/useFirebase";

const RateUs = () => {
  const { user } = useFirebase();
  const { displayName, email } = user;
  const [rating, setRating] = useState("");
  const [userRating, setUserRating] = useState("");
  const full = <FontAwesomeIcon style={{ color: "gold" }} icon={faStar} />;
  const empty = <FontAwesomeIcon style={{ color: "grey" }} icon={faStar} />;

  useEffect(() => {
    if (email) {
      fetch(`https://tourism-app-backend.herokuapp.com/rating/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserRating(data[0]?.rating);
          console.log(data);
        });
    }
  }, [email]);

  const handleValue = (rate) => {
    setRating(rate);
  };

  const handleRating = () => {
    const userRating = {
      userName: displayName,
      userEmail: email,
      rating: rating,
    };

    fetch("https://tourism-app-backend.herokuapp.com/rating", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userRating),
    }).then(() => {
      alert("Congrates! You have given Rating successfully ");
      // window.history.reload();
    });
  };

  const handleUpdate = () => {
    const userRating = {
      userName: displayName,
      userEmail: email,
      rating: rating,
    };
    console.log(userRating);
  };

  return (
    <div className="cont row">
      {userRating && email ? (
        <h3 className="clr" style={{ color: "green" }}>
          You have Rated us by
        </h3>
      ) : (
        <h3 className="clr" style={{ color: "darkgoldenrod" }}>
          Rate our service
        </h3>
      )}

      <div className="col-lg-6 big">
        {userRating && email ? (
          <div className="d-flex justify-content-start my-auto">
            <Rating
              initialRating={userRating}
              readonly
              fullSymbol={full}
              emptySymbol={empty}
            ></Rating>
            <h1 className="ms-5 my-auto">{userRating}.0</h1>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="col-lg-6 d-flex justify-content-evenly big">
        <Rating
          emptySymbol={empty}
          fullSymbol={full}
          onChange={handleValue}
        ></Rating>
        <div>
          {userRating && email ? (
            <Button variant="outline-success" onClick={handleUpdate}>
              Update Rating
            </Button>
          ) : (
            <Button variant="outline-primary" onClick={handleRating}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RateUs;
