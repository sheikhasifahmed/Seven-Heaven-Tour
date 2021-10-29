import React from "react";
import Services from "../Services/Services";
import About from "./About";
import Banner from "./Banner";

const Home = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Banner></Banner>
      <Services></Services>
      <About></About>
    </div>
  );
};

export default Home;
