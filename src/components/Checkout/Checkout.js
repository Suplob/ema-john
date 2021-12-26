import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakeDb";

const Checkout = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.cart = savedCart;
    data.email = user.email;
    fetch(`https://ema-john-backend.herokuapp.com/order/confirm`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    clearTheCart();
    history.push("/order");
  };

  const history = useHistory();

  const handleOrder = () => {
    history.push("/checkout");
    alert("order confirmed");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ textAlign: "center", marginTop: "10rem" }}
    >
      <input
        {...register("name", { required: true })}
        placeholder="name"
        style={{ width: "300px", height: "30px", marginBottom: "20px" }}
      />
      <br />
      <input
        {...register("email", { required: true })}
        placeholder="email"
        style={{ width: "300px", height: "30px", marginBottom: "20px" }}
      />
      <br />
      <input
        {...register("address", { required: true })}
        placeholder="address"
        style={{ width: "300px", height: "30px", marginBottom: "20px" }}
      />
      <br />
      <input
        {...register("phone", { required: true })}
        placeholder="phone no"
        style={{ width: "300px", height: "30px", marginBottom: "20px" }}
      />
      <br />
      {errors.name && <span>This field is required</span>}
      <br />
      <input
        value="place order"
        className="btn-regular"
        type="submit"
        onClick={handleOrder}
      />
    </form>
  );
};

export default Checkout;
