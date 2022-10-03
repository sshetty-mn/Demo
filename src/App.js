import "./App.css";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import App1 from "./components/App1/App1";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/App1" element={<App1 />}></Route>
      </Routes>
    </>
  );
}

export default App;
