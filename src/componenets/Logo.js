import React from "react";

const Logo = () => {
  return (
    <div className={"company-logo-wrapper"}>
      <div className="img-wrapper">
        <img
          alt="Cactus Logo"
          src={process.env.PUBLIC_URL + "/images/logo.png"}
        />
      </div>
      <span className={"store-name"}>Mini Cactus Market</span>
    </div>
  );
};

export default Logo;
