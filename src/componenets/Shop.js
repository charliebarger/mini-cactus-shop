import React from "react";

const Shop = () => {
  return (
    <div className={"shop-page"}>
      <h2>Shop Our Cacti</h2>
      <div className="product-wrapper">
        <div className="product">
          <div className="image-wrapper">
            <img
              alt="cactus"
              src={process.env.PUBLIC_URL + "/images/cacti/barrel-cactus.jpeg"}
            />
          </div>
          <button className="add-to-cart">Add to Cart</button>
          <span>Barrel Cactus</span>
          <span>$12.99</span>
        </div>
      </div>
    </div>
  );
};

export default Shop;
