import React, { useEffect, useState } from "react";

const CartCheckout = (props) => {
  const [totalCost, setTotalCost] = useState();
  useEffect(() => {
    if (props.items.length > 0) {
      let cost = props.items.reduce((sum, { totalCost }) => sum + totalCost, 0);
      console.log(Number(cost));
      setTotalCost(Number(cost));
    }
  }, [props.items, setTotalCost]);
  return (
    <div className="checkout-wrapper">
      <div className="checkout-total">
        <span>Total : </span>
        <span>${totalCost}</span>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartCheckout;
