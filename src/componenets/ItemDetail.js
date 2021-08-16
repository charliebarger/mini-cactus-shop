import React from "react";
import { useParams, useRouteMatch } from "react-router";
import { LoremIpsum } from "react-lorem-ipsum";
import products from "../resources/products";
const ItemDetail = () => {
  const selectItems = [];
  for (let i = 1; i < 11; i++) {
    selectItems.push(i);
  }
  const { skew } = useParams();
  function findItem() {
    for (let i = 0; i < products.length; i++) {
      if (skew === products[i].skew) {
        return products[i];
      }
    }
  }
  const item = findItem();
  return (
    <div id="details-grid">
      <div className="image-detail-wrapper">
        <img
          alt={item.name}
          src={process.env.PUBLIC_URL + `/images/cacti/${item.skew}.png`}
        />
      </div>
      <div className="item-detail-info">
        <h3
          style={{ textTransform: "capitalize" }}
          className="item-detail-title"
        >
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
        <div className="quantity">
          <label for="item-number-select">Quantity</label>
          <select id="item-number-select">
            {selectItems.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <button className="checkout-button item-detail-checkout-button">
          Add to Cart
        </button>

        <button className="go-back">Go Back</button>
      </div>
    </div>
  );
};

export default ItemDetail;
