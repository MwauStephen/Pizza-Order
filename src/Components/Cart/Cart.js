import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "sushii", amount: 2, price: 12.99 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};
