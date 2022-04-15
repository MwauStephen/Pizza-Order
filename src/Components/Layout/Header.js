import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Pizza app</h1>
        <HeaderCartButton />
      </header>
      <div>
        <img src="" alt="Delicous pizza food" />
      </div>
    </Fragment>
  );
};

export default Header;
