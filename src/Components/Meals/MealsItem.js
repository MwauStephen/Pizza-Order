import React from "react";
import styles from "./MealsItem.module.css";

const MealItem = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
        <div></div>
      </div>
    </li>
  );
};

export default MealItem;
