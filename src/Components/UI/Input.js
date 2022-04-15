import React from "react";
import styles from "./Input.module.css";

// const Input = React.forwardRef((ref, props) => {
//   <div className={styles.input}>
//     <label htmlFor={props.id}>{props.label}</label>
//     <input ref={ref} {...props.input} />
//   </div>
// )
// };

const Input = React.forwardRef((ref, props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
