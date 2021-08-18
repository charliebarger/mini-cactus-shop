import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import SelectQuantity from "./SelectQuantity";
import { Link } from "react-router-dom";
const ItemDetailInfo = (props) => {
  console.log("rerender");
  const { setCart, item } = props;
  const setQuantity = (quantity) => {
    item.quantity = quantity;
  };

  function setCartandQuantity() {
    setCart(item);
    props.updateQuantity(item.quantity, item.skew);
  }
  return (
    <div className="item-detail-info">
      <h3 style={{ textTransform: "capitalize" }} className="item-detail-title">
        {item.name}
      </h3>
      <div id="item-details">
        <span>Details : </span>
        <LoremIpsum
          p={1}
          avgSentencesPerParagraph={4}
          avgWordsPerSentence={8}
        />
      </div>
      <span
        style={{
          fontSize: "20px",
          color: "rgb(196, 17, 63)",
          fontWeight: "400",
        }}
      >
        ${item.price}
      </span>
      <div className="quantity">
        <label htmlFor="item-number-select">Quantity</label>
        <SelectQuantity
          addQuantity={setQuantity}
          id="item-number-select"
          number={10}
          skew={item.skew}
        />
      </div>
      <button
        onClick={() => setCartandQuantity()}
        className="checkout-button item-detail-checkout-button"
      >
        Add to Cart
      </button>
      <Link to="/Shop" className="position-go-back">
        <button className="go-back">Go Back</button>
      </Link>
    </div>
  );
};
export default ItemDetailInfo;
