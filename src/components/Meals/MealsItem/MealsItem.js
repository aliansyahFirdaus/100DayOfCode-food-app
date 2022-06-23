import React from "react";
import MealForm from "./MealForm";
import styles from "./MealsItem.module.css";

export default function MealsItem(props) {
  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(props.meal.price);

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  );
}
