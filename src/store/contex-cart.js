import React from "react";

const CartContex = React.createContext({
    meals: [],
    totalAmount: 0,
    addMeals: () => {},
    deleteMeals: () => {}
})

export default CartContex