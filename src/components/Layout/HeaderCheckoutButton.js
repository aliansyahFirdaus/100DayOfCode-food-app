import React, { useContext, useEffect, useState } from "react";

import CartContex from "../../store/contex-cart";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCheckoutButton.module.css";

export default function HeaderCheckoutButton(props) {
  const cartCtx = useContext(CartContex);
  const [bumb, isBumb] = useState(false);

  const { meals } = cartCtx;

  const buttonAnimate = `${styles.button} ${bumb ? styles.bump : ""}`;

  useEffect(() => {
    if (meals.length === 0) return;
    isBumb(true);

    const bumpOff = setTimeout(() => {
      isBumb(false);
    }, 299);

    return () => {
      clearTimeout(bumpOff);
    };
  }, [meals]);

  const totalItemsCart = cartCtx.meals.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={buttonAnimate} onClick={props.onClickCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Chart</span>
      <span className={styles.badge}>{totalItemsCart}</span>
    </button>
  );
}
