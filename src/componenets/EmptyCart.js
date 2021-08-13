import React from "react";
import ShopNowButton from "./ShopNowButton";
const EmptyCart = () => {
  return (
    <div className={"cart-wrapper"}>
      <h1 className={"cart-header"}>Your Cart Is Empty</h1>
      <ShopNowButton />
    </div>
  );
};

export default EmptyCart;
