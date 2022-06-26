import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCheckoutButton.module.css";

export default function HeaderCheckoutButton(props) {
  return (
    <button className={styles.button} onClick={props.onClickCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Chart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}
