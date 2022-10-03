import { React, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
function Login(props) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      values,
      customConfig
    )
      .then((response) => {
        // console.log(response);

        if (response.data.message === "success") {
          navigate("/Home");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email"
              minLength={5}
              value={values.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              minLength={2}
              value={values.password}
              onChange={handleChange}
              name="password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
