import React, { useReducer } from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  //  reducer state
  const [cartState, dispatchCartState] = useReducer();

  // concrete object values
  const addItemToCartHandler = (item) => {};
  const removeItemToCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
