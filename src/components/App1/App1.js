import React from "react";
import Topnav from "../Topnav/Topnav";
import "./App1.css";
import { useState } from "react";
import Axios from "axios";

function App1() {
  const [request, setRequest] = useState("");
  const [response, setResponse] = useState("");

  function handleChange(ev) {
    setRequest(ev.target.value);
  }

  const getResponse = () => {
    Axios.get("").then((response) => {
      console.log(response);
      setResponse(response);
    });
  };
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const postResponse = (e) => {
    e.preventDefault();
    Axios.post("https://reqres.in/api/users", request, customConfig).then(
      (response) => {
        const res = response.data;
        setResponse(JSON.stringify(res));
        // console.log(JSON.stringify(response.data));
      }
    );
  };

  return (
    <>
      <Topnav />
      <div className="App1">
        <div className="App1-top">
          <div className="App1-top-left">
            <h1>Product 1</h1>
          </div>
          <div className="App1-top-right">
            <button className="method" onClick={getResponse}>
              GET
            </button>
            <button className="method" onClick={postResponse}>
              POST
            </button>
            <button className="method">GO</button>
          </div>
        </div>
        <div className="App1-bottom">
          <div className="App1-bottom-left">
            <h3>Request</h3>
            <textarea
              type="text"
              rows="4"
              cols="50"
              value={request}
              onChange={handleChange}
              name="request"
            ></textarea>
          </div>
          <div className="App1-bottom-right">
            <h3>Response</h3>
            <div>{response}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App1;
