import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
const Header = () => {
  return (
    <div className="nav">
      <Logo />
      <div className={"divider"}></div>
      <Nav />
    </div>
  );
};

export default Header;
