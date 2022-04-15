import React from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button>
      <CartIcon />
      <span>Your cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
