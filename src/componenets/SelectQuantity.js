import React from "react";
import { uniqueId } from "lodash";

const SelectQuantity = (props) => {
  console.log(props);
  const selectItems = [];
  for (let i = 1; i < props.number + 1; i++) {
    selectItems.push(i);
  }
  return (
    <select onChange={() => console.log(this)} id={props.id ? props.id : ""}>
      {selectItems.map((item) => (
        <option key={uniqueId()}>{item}</option>
      ))}
    </select>
  );
};
export default SelectQuantity;
