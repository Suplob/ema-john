import React from "react";
import "./Product.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = (props) => {
  const { img, name, price, star } = props.data;
  return (
    <div className="single-product">
      <img src={img} alt="img" />
      <div>
        <h1>{name}</h1>
        <p>${price}</p>
        <button onClick={() => props.displayReview(props.data)}>
          Add to cart
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        <br />
        <Rating
          className="icons"
          initialRating={star}
          readonly
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
        />
      </div>
    </div>
  );
};

export default Products;
