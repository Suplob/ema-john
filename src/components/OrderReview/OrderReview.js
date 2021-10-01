import React from "react";
import useProducts from "../../hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakeDb";
import useCart from "../../hooks/useCart";
import List from "../List/List";

const OrderReview = () => {
  const [products] = useProducts();
  const [list, setList] = useCart(products);

  const handleRemove = (key) => {
    const newCart = list.filter((product) => product.key !== key);
    setList(newCart);
    removeFromDb(key);
  };

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
        <List list={list} buttonContent="Buy More" redirectTo="/"></List>
      </div>
    </div>
  );
};

export default OrderReview;
