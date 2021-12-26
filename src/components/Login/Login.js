import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleGoogleLogin, setUser, setError, loginUser } = useAuth();
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

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentData);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password, history, location);
  };

  return (
    <div className="authentication" style={{ marginTop: "100px" }}>
      <span>login with,</span>
      <button style={{ marginTop: "10px" }} onClick={googleLogin}>
        Login with google
      </button>
    </div>
  );
};

export default Login;
