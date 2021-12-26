import React from "react";
import useAuth from "../../hooks/useAuth";

const ReviewItem = (props) => {
  const { name, price, quantity, key, img } = props.product;
  const { handleRemove } = props;
  const { loading } = useAuth();

  return (
    <div>
      {loading === true ? (
        <div></div>
      ) : (
        <div className="single-product" style={{ marginLeft: "50px" }}>
          <img src={img} alt="Thumbnail img" />
          <div>
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemove(key)} className="btn-regular">
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewItem;
