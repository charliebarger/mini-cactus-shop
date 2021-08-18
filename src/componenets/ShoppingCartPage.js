import React from "react";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";
const ShoppingCartPage = (props) => {
  if (props.items.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <FullCart
        removeItem={props.removeItem}
        items={props.items}
        updateQuantity={props.updateQuantity}
      />
    );
  }
};

export default ShoppingCartPage;
