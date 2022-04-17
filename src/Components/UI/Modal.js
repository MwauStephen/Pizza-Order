import React from "react";
import styles from "./Modal.module.css";

const BackDrop = () => {
  return <div className={styles.backdrop}>{props.children}</div>;
};

const ModalOverlay = () => {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = () => {
  return;
};

export default Modal;
