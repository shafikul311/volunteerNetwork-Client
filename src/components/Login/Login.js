import React from "react";
import { Link } from "react-router-dom";
import google from "../../images/Group 573.png";
import RegisterForm from "../RegisterForm/RegisterForm";

const Login = () => {
  return (
    <div className="text-center pt-5">
      <h1>Login with google</h1>

      <button
        type="button"
        className="btn btn-outline-primary w-25 rounded-pill"
      >
        <img
          className="align-content-start"
          style={{ height: "20px" }}
          src={google}
          alt=""
        />{" "}
        Continue with Google{" "}
      </button>

      <p className="pt-3">
        Do not have an account ? <Link to="/register">Creat an account</Link>
      </p>
    </div>
  );
};

export default Login;
