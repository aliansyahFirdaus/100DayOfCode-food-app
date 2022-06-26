import React, { useContext } from "react";
import converterCurrency from "../../../helper/currencyHelper";
import CartContex from "../../../store/contex-cart";
import MealForm from "./MealForm";
import styles from "./MealsItem.module.css";

export default function MealsItem(props) {
  const cartCTX = useContext(CartContex);

  const price = props.meal.price * 1000;
  const priceFormat = converterCurrency(price);

  const addItems = (amount) => {
    cartCTX.addMeal({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{priceFormat}</div>
      </div>
      <div>
        <MealForm id={props.meal.id} addItems={addItems} />
      </div>
    </li>
  );
}
