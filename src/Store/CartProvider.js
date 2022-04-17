import React from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  // concrete object values
  const addItemToCartHandler = () => {};
  const removeItemToCartHandler = () => {};
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  <CartContext value={cartContext}>{props.children}</CartContext>;
};

export default CartProvider;
