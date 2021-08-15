import React from "react";

const FullCart = () => {
  const selectItems = [];
  for (let i = 1; i < 11; i++) {
    selectItems.push(i);
  }
  console.log(selectItems);
  return (
    <div className={"cart-wrapper"}>
      <h2 className={"cart-page-header"}>Your Cart</h2>
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
          <select>
            {selectItems.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <span>$12.99</span>
      </div>
      <div className="checkout-wrapper">
        <div className="checkout-total">
          <span>Total : </span>
          <span>$12.99</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default FullCart;
