import React from "react";
import gif from "../../utilities/checkout-gif.gif";
import { removeFromDb } from "../../utilities/fakeDb";

const Checkout = () => {
  return (
    <div>
      <img
        src={gif}
        alt="gif of a tu puta madre"
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default Checkout;
