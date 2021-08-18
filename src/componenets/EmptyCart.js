import React from "react";
import ShopNowButton from "./ShopNowButton";
const EmptyCart = () => {
  return (
    <div className={"cart-wrapper"}>
      <h2>Your Cart Is Empty</h2>
      <ShopNowButton />
    </div>
  );
};

export default EmptyCart;
