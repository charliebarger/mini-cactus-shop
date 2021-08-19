import React from "react";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <nav>
      <Link className={"nav-item"} to={"/shop"}>
        Shop
      </Link>
      <Link className={"nav-item"} to={"/"}>
        Home
      </Link>
      <Link to={"/cart"}>
        <CartButton items={props.items} />
      </Link>
    </nav>
  );
};

export default Nav;
