import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
