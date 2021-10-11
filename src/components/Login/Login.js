import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleGoogleLogin, setUser, setError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const googleLogin = () => {
    handleGoogleLogin()
      .then((result) => {
        setUser(result);
        history.push(location?.state.from || "/");
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <div className="authentication">
      <form>
        <input placeholder="Enter your email here" name="email" type="text" />
        <br />
        <input placeholder="Password" name="email" type="password" />
      </form>
      <span>Or login with,</span>
      <button style={{ marginTop: "10px" }} onClick={googleLogin}>
        Login with google
      </button>
    </div>
  );
};

export default Login;
