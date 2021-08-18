import React from "react";
import CartCheckout from "./CartCheckout";
import CartItems from "./CartItems";
const FullCart = (props) => {
  return (
    <div className={"cart-wrapper"}>
      <h2 className={"cart-page-header"}>Your Cart</h2>
      <CartItems updateQuantity={props.updateQuantity} items={props.items} />
      <CartCheckout items={props.items} />
    </div>
  );
};

export default FullCart;
