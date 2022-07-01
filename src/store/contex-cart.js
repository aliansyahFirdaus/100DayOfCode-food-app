import React from "react";

const CartContex = React.createContext({
    meals: [],
    totalAmount: 0,
    addMeals: () => {},
    deleteMeals: () => {},
    clearCart: () => {}
})

export default CartContex