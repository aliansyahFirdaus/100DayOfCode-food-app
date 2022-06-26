import React, { useContext } from "react";
import converterCurrency from "../../helper/currencyHelper";
import CartContex from "../../store/contex-cart";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem"

const DUMMY_MEALS = [
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function Cart(props) {
  const cartCtx = useContext(CartContex)

  const mealOnCo = (
    <ul className={styles["cart-items"]}>
      {cartCtx.meals.map((meal) => {
        return <CartItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );

  let totalConvert = converterCurrency(cartCtx.totalAmount);

  return (
    <Modal>
      {mealOnCo}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalConvert}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--cancel"]} onClick={props.onClose}>Close</button>
        <button className={styles["button--payment"]}>Payment</button>
      </div>
    </Modal>
  );
}
