import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [emailUser, setEmailUser] = useState({});
  const { registerEmail } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setEmailUser(data);
  };
  const emailRegistration = () => {
    registerEmail(emailUser);
  };

  return (
    <div className="authentication">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="enter your name"
        />
        <br />
        <input
          {...register("email", { required: true })}
          placeholder="enter your email"
        />
        <br />
        <input
          {...register("password", { required: true })}
          placeholder="enter your password"
        />
        <br />
        {errors.email && <span className="error">This field is required</span>}
        <br />
        <input
          type="submit"
          className="btn-regular"
          onClick={emailRegistration}
        />
      </form>
    </div>
  );
};

export default Register;
