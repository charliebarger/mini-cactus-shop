import React from "react";

const Shop = () => {
  return (
    <div className={"shop-page"}>
      <h2>SHOP</h2>
      <div className="product-wrapper">
        <div className="product">
          <div className="image-wrapper">
            <img
              alt="cactus"
              src={process.env.PUBLIC_URL + "/images/cacti/barrel-cactus.png"}
            />
          </div>
          <span className="product-name">Barrel Cactus</span>
          <span className="product-price">$12.99</span>
        </div>
      </div>
    </div>
  );
};

export default Shop;
