import React, { Fragment } from "react";
import styles from "./Header.module.css";
import heroImg from "../../assets/meals.jpg";
import HeaderCheckoutButton from "./HeaderCheckoutButton";

export default function Header() {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Header</h1>
        <HeaderCheckoutButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={heroImg} />
      </div>
    </Fragment>
  );
}