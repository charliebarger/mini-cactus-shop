import React from "react";
import products from "../resources/products";
import { Link, useRouteMatch } from "react-router-dom";
const ShopItems = () => {
  const match = useRouteMatch();
  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <Link to={`${match.url}/${product.skew}`}>
          <div className="product">
            <div className="image-wrapper">
              <img
                alt={product.name}
                src={
                  process.env.PUBLIC_URL + `/images/cacti/${product.skew}.png`
                }
              />
            </div>
            <span
              style={{ textTransform: "capitalize" }}
              className="product-name"
            >
              {product.name}
            </span>
            <span className="product-price">${product.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopItems;
