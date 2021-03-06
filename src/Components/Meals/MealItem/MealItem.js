import React, { useContext } from "react";
import CartContext from "../../../Store/Cart-context";
import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

const MealsItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {};

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
