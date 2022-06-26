import React from "react";
import CartContex from "./contex-cart";

export default function CartProvider(props) {
  const addMealHandler = (id) => {
    return id;
  };

  const deleteMealHandler = (id) => {
    return id;
  };

  const cartContex = {
    meals: [],
    id: "",
    addMeal: addMealHandler,
    deleteMeal: deleteMealHandler,
  };

  return <CartContex.Provider value={cartContex} >{props.children}</CartContex.Provider>;
}
