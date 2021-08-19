import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
const Header = (props) => {
  return (
    <div className="nav">
      <Logo />
      <div className={"divider"}></div>
      <Nav items={props.items} />
    </div>
  );
};

export default Header;
