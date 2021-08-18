import React from "react";
import FullCart from "./FullCart";
const ShoppingCartPage = (props) => {
  return <FullCart items={props.items} updateQuantity={props.updateQuantity} />;
};

export default ShoppingCartPage;
