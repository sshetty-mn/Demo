import React from "react";
import { Link } from "react-router-dom";
import "./Topnav.css";
import Logo from "../Img/Logo.png";
function Topnav() {

  return (
    <div className="nav">
      <ul>
        <div className="nav-left">
          <a href="https://www.modeln.com/" target="blank">
            <img className="Logo" src={Logo} alt=""></img>
          </a>
          <Link to="/Home" className="link">
            <li>Home</li>
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/" className="link">
            <li id="logout-txt">Logout</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Topnav;
