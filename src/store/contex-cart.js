import React from "react";

const CartContex = React.createContext({
    meals: [],
    id: "",
    addMeals: () => {},
    deleteMeals: () => {}
})

export default CartContex