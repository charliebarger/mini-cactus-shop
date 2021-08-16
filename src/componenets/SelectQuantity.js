import React from "react";

const SelectQuantity = (props) => {
  const selectItems = [];
  for (let i = 1; i < props.number; i++) {
    selectItems.push(i);
  }
  return (
    <select id={props.id ? props.id : ""}>
      {selectItems.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
};
export default SelectQuantity;
