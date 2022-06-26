import React, { useReducer } from "react";
import CartContex from "./contex-cart";

const defaultCartReducer = {
  meals: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":

      const existMeal = state.meals.some((meal) => meal.id === action.meal.id)
      let newMeals = []

      if(existMeal){
        const mealIndex = state.meals.findIndex((meal) => meal.id === action.meal.id)
        const newMealAmount = {
          ...state.meals[mealIndex],
          amount: state.meals[mealIndex].amount + action.meal.amount
        }
        state.meals[mealIndex] = newMealAmount
        newMeals = [...state.meals]
      } else {
        newMeals = [...state.meals, action.meal]
      }

      return {
        meals: [...newMeals],
        totalAmount: state.totalAmount + action.meal.price * action.meal.amount,
      };

    case "DEL":
      const newItem = state.meals.filter((meal) => meal.id !== action.id);
      return {
        meals: [...newItem],
        totalAmount:
          state.totalAmount - state.meals.find((meal) => meal.id === id).price,
      };

    default:
      return defaultCartReducer;
  }
};

export default function CartProvider(props) {
  const [cartsMeals, dispatchCartMeals] = useReducer(
    cartReducer,
    defaultCartReducer
  );

  const addMealHandler = (meal) => {
    dispatchCartMeals({ type: "ADD", meal });
    // return id;
  };

  const deleteMealHandler = (id) => {
    dispatchCartMeals({ type: "DEL", id });
    // return id;
  };

  const cartContex = {
    meals: cartsMeals.meals,
    totalAmount: cartsMeals.totalAmount,
    addMeal: addMealHandler,
    deleteMeal: deleteMealHandler,
  };

  return (
    <CartContex.Provider value={cartContex}>
      {props.children}
    </CartContex.Provider>
  );
}
