import React from "react";
import "./LoginRegister.scss";

// Login and Register
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";

function LoginRegister() {
  return (
    <div className="login-register">
      <Login />
      <Register />
    </div>
  );
}

export default LoginRegister;
