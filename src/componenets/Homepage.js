import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className={"home-page"}>
      <div className={"shop-now-wrapper"}>
        <h1>Welcome to Mini Cactus Market</h1>
        <Link to={"/shop"} className={"shop-now"}>
          <div>
            <span>Shop Now</span>
          </div>
        </Link>
      </div>
      <div className="sample">
        <div className="cactus-wrapper">
          <img
            alt={"cactus"}
            src={process.env.PUBLIC_URL + "/images/cactus-plant.png"}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
