import React, { useContext } from "react";
import converterCurrency from "../../helper/currencyHelper";
import CartContex from "../../store/contex-cart";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContex);

  const addItem = (item) => {
    console.log(item, '====')
    cartCtx.addMeal({...item, amount: 1})
  };
  const removeItem = (id) => {
    cartCtx.deleteMeal(id)
  };

  const mealOnCo = (
    <ul className={styles["cart-items"]}>
      {cartCtx.meals.map((meal) => {
        return (
          <CartItem
            key={meal.id}
            meal={meal}
            onAdd={addItem.bind(null, meal)}
            onRemove={removeItem.bind(null, meal.id)}
          />
        );
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
        <button className={styles["button--cancel"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles["button--payment"]}>Payment</button>
      </div>
    </Modal>
  );
}
