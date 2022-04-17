import React, { Fragment } from "react";
import { ReactDOM } from "react";
import styles from "./Modal.module.css";

const BackDrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = () => {
  return <div className={styles.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
