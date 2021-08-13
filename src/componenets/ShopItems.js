import React from "react";
import products from "../resources/products";

const ShopItems = () => {
  return products.map((product) => (
    <div className="product">
      <div className="image-wrapper">
        <img
          alt={product.name}
          src={process.env.PUBLIC_URL + `/images/cacti/${product.skew}.png`}
        />
      </div>
      <span className="product-name">{product.name}</span>
      <span className="product-price">${product.price}</span>
    </div>
  ));
};

export default ShopItems;
