import { Link } from "react-router-dom";
import Logo from "../Img/Logo.png";
import "./App.css";

function App() {
  return (
    <div className="main-div">
      <div className="app-box">
        <Link to="/App1">
          <img src={Logo} alt="" className="p-img" />
        </Link>
      </div>
      <div className="app-box">
        <Link to="/App1">
          <img src={Logo} alt="" className="p-img" />
        </Link>
      </div>
      <div className="app-box">
        <Link to="/App1">
          <img src={Logo} alt="" className="p-img" />
        </Link>
      </div>
      <div className="app-box">
        <Link to="/App1">
          <img src={Logo} alt="" className="p-img" />
        </Link>
      </div>
      <div className="app-box">
        <Link to="/App1">
          <img src={Logo} alt="" className="p-img" />
        </Link>
      </div>
      <div className="app-box">
        <Link to="/App1">
          <img src={Logo} alt="" className="p-img" />
        </Link>
      </div>
      <div className="app-box">
        <Link to="/App1">
          <img src={Logo} alt="" className="p-img" />
        </Link>
      </div>
    </div>
  );
}

export default App;
