import React from "react";
import SelectQuantity from "./SelectQuantity";
const CartItems = (props) => {
  console.log(props.items);
  return (
    <div>
      <div className="cart-grid">
        <span className="cart-header">Item</span>
        <span className="cart-header">Unit Price</span>
        <span className="cart-header">Qty</span>
        <span className="cart-header">Item Total</span>
      </div>
      {props.items.map((item) => (
        <div className="cart-grid">
          <div className="item-section">
            <div className="cart-image-wrapper">
              <img
                alt={item.name}
                src={process.env.PUBLIC_URL + `/images/cacti/${item.skew}.png`}
              />
            </div>
            <span className="cart-item-name">Barrel Cactus</span>
          </div>
          <span>{item.price}</span>
          <div>
            <SelectQuantity
              number={10}
              addQuantity={props.setQuantity}
              item={item}
            />
          </div>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
