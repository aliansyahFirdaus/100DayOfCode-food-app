import React from "react";
import Card from "../UI/Card";
import styles from "./MealsAvailable.module.css";
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function MealsAvailable() {
  const listOfMeals = DUMMY_MEALS.map((meal) => {
    return <MealsItem key={meal.id} meal={meal} />;
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{listOfMeals}</ul>
      </Card>
    </section>
  );
}
