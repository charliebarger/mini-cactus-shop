import React from "react";
import CartCheckout from "./CartCheckout";
import CartItems from "./CartItems";
const FullCart = (props) => {
  console.log(props.items);
  const selectItems = [];
  for (let i = 1; i < 11; i++) {
    selectItems.push(i);
  }

  return (
    <div className={"cart-wrapper"}>
      <h2 className={"cart-page-header"}>Your Cart</h2>
      <CartItems
        updateCart={props.updateCart}
        items={props.items}
        setQuantity={props.setQuantity}
      />
      <CartCheckout />
    </div>
  );
};

export default FullCart;
