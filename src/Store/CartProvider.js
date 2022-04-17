import React from "react";
import CartContext from "./Cart-context";

const CartProvider = () => {
  // concrete object values
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem:,
    removeItem:,
  };

  <CartContext>{props.children}</CartContext>;
};

export default CartProvider;
