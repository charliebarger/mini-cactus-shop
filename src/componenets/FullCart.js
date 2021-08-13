import React from "react";

const FullCart = () => {
  return (
    <div className={"cart-wrapper"}>
      <h1 className={"cart-header"}>Your Cart</h1>
      <div className="cart-grid">
        <span>Item</span>
        <span>Unit Price</span>
        <span>Qty</span>
        <span>Item Total</span>
        <span>Item</span>
        <span>Unit Price</span>
        <span>Qty</span>
        <span>Item Total</span>
      </div>
    </div>
  );
};

export default FullCart;
