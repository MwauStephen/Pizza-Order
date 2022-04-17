import React, { Fragment } from "react";
import { ReactDOM } from "react";
import styles from "./Modal.module.css";

const BackDrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = () => {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
    </Fragment>
  );
};

export default Modal;
