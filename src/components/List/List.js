import React from "react";
import { Link } from "react-router-dom";
import "./List.css";

const List = (props) => {
  let totalQuantity = 0;
  let total = 0;
  for (let product of props.list) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity += product.quantity;
  }
  return (
    <div className="list">
      <h3>Order Summary</h3>
      <p>Items Ordered: {totalQuantity}</p>
      <p>Total: {total.toFixed(2)}</p>
      <Link to={props.redirectTo}>
        <button>{props.buttonContent}</button>
      </Link>
    </div>
  );
};

export default List;
