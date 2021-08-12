import React from "react";

const Homepage = () => {
  return (
    <div className={"body-page"}>
      <div className={"shop-now-wrapper"}>
        <h1>Welcome to Mini Cactus Market</h1>
        <div className={"shop-now"}>
          <span>Shop Now</span>
        </div>
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
