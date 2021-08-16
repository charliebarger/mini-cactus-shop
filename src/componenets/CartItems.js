import React from "react";
import SelectQuantity from "./SelectQuantity";
const CartItems = () => {
  return (
    <div className="cart-grid">
      <span className="cart-header">Item</span>
      <span className="cart-header">Unit Price</span>
      <span className="cart-header">Qty</span>
      <span className="cart-header">Item Total</span>
      <div className="item-section">
        <div className="cart-image-wrapper">
          <img
            alt="Barrel Cactus"
            src={process.env.PUBLIC_URL + "/images/cacti/barrel-cactus.png"}
          />
        </div>
        <span className="cart-item-name">Barrel Cactus</span>
      </div>
      <span>$12.99</span>
      <div>
        <SelectQuantity number={10} />
      </div>
      <span>$12.99</span>
    </div>
  );
};

export default CartItems;
