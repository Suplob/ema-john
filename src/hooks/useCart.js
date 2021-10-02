import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/fakeDb";

const useCart = (products) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setList(storedCart);
    }
  }, [products]);

  return [list, setList];
};

export default useCart;
