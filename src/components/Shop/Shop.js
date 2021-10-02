import React, { useEffect, useState } from "react";
import List from "../List/List";
import Products from "../Products/Products";
import { addToDb } from "../../utilities/fakeDb";
import "./Shop.css";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [list, setList] = useCart(product);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON?fbclid=IwAR3KXBNJBtb2EImQNUA07e7oGkNnkro86sfMbjkZLhDmsCWpFFhmSuGAjCw"
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayProducts(data);
        setProduct(data);
      });
  }, []);

  function displayReview(data) {
    const exist = list.find((pd) => pd.key === data.key);
    let newCart = [];
    if (exist) {
      const rest = list.filter((pd) => pd.key === data.key);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, data];
    } else {
      product.quantity = 1;
      newCart = [...list, data];
    }
    setList(newCart);
    addToDb(data.key);
  }

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const matchedProduct = product.filter((products) =>
      products.name.toLowerCase().includes(value)
    );
    setDisplayProducts(matchedProduct);
  };

  return (
    <>
      <nav>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Product"
        />
      </nav>
      <div className="product-wrapper">
        <div className="products">
          {displayProducts.map((data) => (
            <Products
              key={data.key}
              data={data}
              displayReview={displayReview}
            ></Products>
          ))}
        </div>
        <div>
          <List list={list}>
            <Link to="/review">
              <button>Review your order</button>
            </Link>
          </List>
        </div>
      </div>
    </>
  );
};

export default Shop;
