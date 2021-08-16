import React from "react";
import CartCheckout from "./CartCheckout";
import CartItems from "./CartItems";
const FullCart = () => {
  const selectItems = [];
  for (let i = 1; i < 11; i++) {
    selectItems.push(i);
  }

  return (
    <div className={"cart-wrapper"}>
      <h2 className={"cart-page-header"}>Your Cart</h2>
      <CartItems />
      <CartCheckout />
    </div>
  );
};

export default FullCart;
