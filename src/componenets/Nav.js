import React from "react";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <Link className={"nav-item"} to={"/shop"}>
        Shop
      </Link>
      <Link className={"nav-item"} to={"/"}>
        Home
      </Link>
      <Link to={"/cart"}>
        <CartButton />
      </Link>
    </nav>
  );
};

export default Nav;
