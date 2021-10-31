import React from "react";
import Services from "../Services/Services";
import About from "./About";
import Banner from "./Banner";
import Manage from "./Manage";

const Home = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Manage></Manage>
    </div>
  );
};

export default Home;
