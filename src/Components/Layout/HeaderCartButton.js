import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  // add the items to cart
  const cartCtx = useContext(CartContext);

  // calculates the total items to be added to cart from array items
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
