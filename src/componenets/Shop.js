import React from "react";
import ShopItems from "./ShopItems";
const Shop = () => {
  return (
    <div className={"shop-page"}>
      <h2>SHOP</h2>
      <div className="product-wrapper">
        <ShopItems />
      </div>
    </div>
  );
};

export default Shop;
