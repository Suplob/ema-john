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
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;

  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://ema-john-backend.herokuapp.com/products?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayProducts(data.products);
        setProduct(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
      });
  }, [page]);

  function displayReview(data) {
    const exist = list.find((pd) => pd.key === data.key);
    let newCart = [];
    if (exist) {
      const rest = list.filter((pd) => pd.key !== data.key);
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
          className="search-input"
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

          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setPage(number)}
                className={number === page ? "selected" : ""}
              >
                {number + 1}
              </button>
            ))}
          </div>
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
