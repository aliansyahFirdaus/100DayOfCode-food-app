import React, { useContext } from "react";

import CartContex from "../../store/contex-cart";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCheckoutButton.module.css";

export default function HeaderCheckoutButton(props) {
  const cartCtx = useContext(CartContex);
  // console.log(cartCtx)

  const totalItemsCart = cartCtx.meals.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClickCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Chart</span>
      <span className={styles.badge}>{totalItemsCart}</span>
    </button>
  );
}
