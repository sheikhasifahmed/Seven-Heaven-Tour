import React from "react";
import Services from "../Services/Services";
import About from "./About";
import Banner from "./Banner";
import Manage from "./Manage";
import RateUs from "./RateUs";

const Home = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Manage></Manage>
      <RateUs></RateUs>
    </div>
  );
};

export default Home;
