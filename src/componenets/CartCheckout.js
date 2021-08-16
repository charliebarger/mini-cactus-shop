import React from "react";

const CartCheckout = () => {
  return (
    <div className="checkout-wrapper">
      <div className="checkout-total">
        <span>Total : </span>
        <span>$12.99</span>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartCheckout;
