import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealImg from "../../Assets/pizza5.jpg";
import logo from "../../Assets/logo.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          <img src={logo} alt="food logo" className={styles.logo} />
          Pizza app
        </h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImg} alt="Delicous pizza food" />
      </div>
    </Fragment>
  );
};

export default Header;
