import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();

  const history = useHistory();

  useEffect(() => {
    fetch(`https://ema-john-backend.herokuapp.com/order?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => setOrder(data));
  }, []);

  return (
    <div>
      {order.map((i) => (
        <ul key={i._id}>
          <li>{i.name} ::</li>
          <li>{i.email}</li>
        </ul>
      ))}
    </div>
  );
};

export default Order;
