import React from "react";
import { Link } from "react-router-dom";
const ShopNowButton = () => {
  return (
    <Link to={"/shop"} className={"shop-now"}>
      <div>
        <span>Shop Now</span>
      </div>
    </Link>
  );
};

export default ShopNowButton;
