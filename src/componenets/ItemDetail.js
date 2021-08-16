import React from "react";
import ItemDetailImage from "./ItemDetailImage";
import { useParams } from "react-router";
import products from "../resources/products";
import ItemDetailInfo from "./ItemDetailInfo";

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
      <ItemDetailImage skew={skew} name={name} />
      <ItemDetailInfo name={name} price={price} />
    </div>
  );
};

export default ItemDetail;
