import React from "react";
import { useParams, useRouteMatch } from "react-router";
import { LoremIpsum } from "react-lorem-ipsum";
import products from "../resources/products";
const ItemDetail = () => {
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
      <h3>{item.name}</h3>
      <button className="checkout-button">Add to Cart</button>
      <button className="go-back">Go Back</button>
      <div id="item-details">
        <span>Details :</span>
        <LoremIpsum
          p={1}
          avgSentencesPerParagraph={4}
          avgWordsPerSentence={8}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
