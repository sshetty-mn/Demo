import React from "react";
import "./Home.css";
import Topnav from "../Topnav/Topnav";
import { Routes, Route } from "react-router-dom";
import App from "../App/App";
function Home() {
  return (
    <>
      <Topnav />
      <App />
    </>
  );
}

export default Home;
