import React from "react";
import converterCurrency from "../../helper/currencyHelper";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

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
  let total = 0;

  const mealOnCo = (
    <ul className={styles["cart-items"]}>
      {DUMMY_MEALS.map((meal) => {
        total += meal.price;
        return <li key={meal.id}>{meal.name}</li>;
      })}
    </ul>
  );

  let totalConvert = converterCurrency(total);

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
