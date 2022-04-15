import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  <div className={styles.input}>
    <label htmlFor={props.id}>{props.label}</label>
    <input />
  </div>;
};

export default Input;
