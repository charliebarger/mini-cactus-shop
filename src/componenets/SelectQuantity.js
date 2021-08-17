import React from "react";
import { uniqueId } from "lodash";
import { useState, useEffect } from "react";

const SelectQuantity = (props) => {
  console.log(props.placeHolder);
  const [quantity, setQuantity] = useState(
    props.placeHolder ? props.placeHolder : 1
  );

  const { addQuantity, item } = props;
  console.log(addQuantity);
  useEffect(() => {
    addQuantity(item, quantity);
  }, [quantity, addQuantity, item]);

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
