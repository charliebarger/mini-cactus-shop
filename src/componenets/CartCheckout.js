import React, { useEffect, useState } from "react";

const CartCheckout = (props) => {
  const [totalCost, setTotalCost] = useState();
  useEffect(() => {
    if (props.items.length > 0) {
      let cost = props.items.reduce(
        (sum, { totalCost }) => sum + Number(totalCost),
        0
      );
      setTotalCost(cost.toFixed(2));
    }
  }, [props.items, setTotalCost]);
  return (
    <div className="checkout-wrapper">
      <div className="checkout-total">
        <span>Total : </span>
        <span>${totalCost}</span>
      </div>
      <button
        onClick={() => alert("Thanks for Shopping!")}
        className="checkout-button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartCheckout;
