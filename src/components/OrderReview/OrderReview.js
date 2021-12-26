import React from "react";
import useProducts from "../../hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import { clearTheCart, removeFromDb } from "../../utilities/fakeDb";
import useCart from "../../hooks/useCart";
import List from "../List/List";
import { useHistory } from "react-router-dom";

const OrderReview = () => {
  const [products] = useProducts();
  const [list, setList] = useCart(products);

  const history = useHistory();

  const handleRemove = (key) => {
    const newCart = list.filter((product) => product.key !== key);
    setList(newCart);
    removeFromDb(key);
  };

  function placeOrder() {
    setList([]);
    history.push("/checkout");
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {list.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <List list={list}>
          <button onClick={placeOrder}>Place Order</button>
        </List>
      </div>
    </div>
  );
};

export default OrderReview;
