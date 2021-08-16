import React from "react";
import { useParams } from "react-router";
import { LoremIpsum } from "react-lorem-ipsum";
import products from "../resources/products";
import SelectQuantity from "./SelectQuantity";
import { Link } from "react-router-dom";

const ItemDetail = () => {
  const { targetSkew } = useParams();
  const { name, price, skew } = findItem();
  function findItem() {
    for (let i = 0; i < products.length; i++) {
      if (targetSkew === products[i].skew) {
        return products[i];
      }
    }
  }

  return (
    <div id="details-grid">
      <div className="image-detail-wrapper">
        <img
          alt={name}
          src={process.env.PUBLIC_URL + `/images/cacti/${skew}.png`}
        />
      </div>
      <div className="item-detail-info">
        <h3
          style={{ textTransform: "capitalize" }}
          className="item-detail-title"
        >
          {name}
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
          ${price}
        </span>
        <div className="quantity">
          <label for="item-number-select">Quantity</label>
          <SelectQuantity id="item-number-select" number={10} />
        </div>
        <button className="checkout-button item-detail-checkout-button">
          Add to Cart
        </button>
        <Link to="/Shop" className="position-go-back">
          <button className="go-back">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
