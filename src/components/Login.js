import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div data-testid="login">
      <h1>Login</h1>
      <Link to="/wel" id="submit">
        submit
      </Link>
    </div>
  );
};

export default Login;
