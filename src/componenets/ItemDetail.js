import React from "react";
import ItemDetailImage from "./ItemDetailImage";
import { useParams } from "react-router";
import products from "../resources/products";
import ItemDetailInfo from "./ItemDetailInfo";

const ItemDetail = (props) => {
  const { targetSkew } = useParams();
  const addedItem = findItem();
  function findItem() {
    for (let i = 0; i < products.length; i++) {
      if (targetSkew === products[i].skew) {
        return products[i];
      }
    }
  }
  return (
    <div id="details-grid">
      <ItemDetailImage skew={addedItem.skew} name={addedItem.name} />
      <ItemDetailInfo
        setCart={props.setCart}
        item={addedItem}
        updateQuantity={props.updateQuantity}
      />
    </div>
  );
};

export default ItemDetail;
