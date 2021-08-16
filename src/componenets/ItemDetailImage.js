import React from "react";

const ItemDetailImage = (props) => {
  const { name, skew } = props;
  return (
    <div className="image-detail-wrapper">
      <img
        alt={name}
        src={process.env.PUBLIC_URL + `/images/cacti/${skew}.png`}
      />
    </div>
  );
};

export default ItemDetailImage;
