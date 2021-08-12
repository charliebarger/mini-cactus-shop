import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
