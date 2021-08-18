import React from "react";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";
const ShoppingCartPage = (props) => {
  console.log(props.items);
  return (
    <div>
      {!props.items.length < 1 ? (
        <FullCart
          updateCart={props.updateCart}
          setQuantity={props.setQuantity}
          items={props.items}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default ShoppingCartPage;
