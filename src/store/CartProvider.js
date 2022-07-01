import React, { useReducer } from "react";
import CartContex from "./contex-cart";

const defaultCartReducer = {
  meals: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  if(action.type === "RESET") return defaultCartReducer

  const existMeal = state.meals.some((meal) => meal.id === action.meal.id);

  let mealIndex = existMeal
    ? state.meals.findIndex((meal) => meal.id === action.meal.id)
    : false;

  let newMeals = [];

  switch (action.type) {
    case "ADD":
      if (mealIndex !== false) {
        const newMealAmount = {
          ...state.meals[mealIndex],
          amount: state.meals[mealIndex].amount + action.meal.amount,
        };
        state.meals[mealIndex] = newMealAmount;
        newMeals = [...state.meals];
      } else {
        newMeals = [...state.meals, action.meal];
      }

      return {
        meals: [...newMeals],
        totalAmount: state.totalAmount + action.meal.price * action.meal.amount,
      };

    case "DEL":
      if (mealIndex !== false) {
        if (state.meals[mealIndex].amount > 1) {
          const newMeal = {
            ...state.meals[mealIndex],
            amount: state.meals[mealIndex].amount - 1,
          };

          state.meals[mealIndex] = newMeal;

          console.log(state.meals);

          newMeals = [...state.meals];
        } else {
          newMeals = state.meals.filter((meal) => meal.id !== action.meal.id);
          console.log(newMeals);
        }
      }

      return {
        meals: [...newMeals],
        totalAmount: state.totalAmount - state.meals[mealIndex].price,
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
    dispatchCartMeals({ type: "DEL", meal: { id } });
    // return id;
  };

  const resetCart = () => {
    dispatchCartMeals({type: "RESET"})
  }

  const cartContex = {
    meals: cartsMeals.meals,
    totalAmount: cartsMeals.totalAmount,
    addMeal: addMealHandler,
    deleteMeal: deleteMealHandler,
    clearCart: resetCart
  };

  return (
    <CartContex.Provider value={cartContex}>
      {props.children}
    </CartContex.Provider>
  );
}
