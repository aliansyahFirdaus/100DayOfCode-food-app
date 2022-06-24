import React from "react";
import MealForm from "./MealForm";
import styles from "./MealsItem.module.css";

export default function MealsItem(props) {
  const price = props.meal.price * 1000;
  const priceFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{priceFormat}</div>
      </div>
      <div>
        <MealForm id={props.meal.id} />
      </div>
    </li>
  );
}
