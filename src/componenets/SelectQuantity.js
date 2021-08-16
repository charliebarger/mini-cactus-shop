import React from "react";
import { uniqueId } from "lodash";

const SelectQuantity = (props) => {
  const selectItems = [];
  for (let i = 1; i < props.number; i++) {
    selectItems.push(i);
  }
  return (
    <select id={props.id ? props.id : ""}>
      {selectItems.map((item) => (
        <option key={uniqueId()}>{item}</option>
      ))}
    </select>
  );
};
export default SelectQuantity;
