import React from "react";
import { uniqueId } from "lodash";
import { useState, useEffect } from "react";

const SelectQuantity = (props) => {
  const [quantity, setQuantity] = useState(
    props.placeHolder ? props.placeHolder : 1
  );
  const addQuantity = props.addQuantity;
  useEffect(() => {
    addQuantity(quantity, props.skew);
  }, [quantity, addQuantity, props.skew]);

  const selectItems = [];
  for (let i = 1; i < props.number + 1; i++) {
    selectItems.push(i);
  }
  return (
    <select
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}
    >
      {selectItems.map((item) => (
        <option key={uniqueId()}>{item}</option>
      ))}
    </select>
  );
};
export default SelectQuantity;
