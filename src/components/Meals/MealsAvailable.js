import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./MealsAvailable.module.css";
import MealsItem from "./MealsItem/MealsItem";

// const DUMMY_MEALS = [
//   {
//     id: "1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

export default function MealsAvailable() {
  const [meals, setMeals] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://react-food-app-practice-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadData = [];

      let i = 1;
      for (const data of responseData) {
        loadData.push({
          id: `m${i}`,
          name: data.name,
          description: data.description,
          price: data.price,
        });
        i += 1;
      }

      setMeals(loadData);
      setStatus("fetched");
    };

    fetchUser().catch((err) => setStatus(err.message));
  }, []);

  switch (status) {
    case "loading":
      return (
        <section
          style={{ textAlign: "center", marginTop: 100, color: "white" }}
        >
          <h1>Loading...</h1>
        </section>
      );

    case "fetched":
      const listOfMeals = meals.map((meal) => {
        return <MealsItem key={meal.id} meal={meal} />;
      });

      return (
        <section className={styles.meals}>
          <Card>
            <ul>{listOfMeals}</ul>
          </Card>
        </section>
      );

    default:
      return (
        <section
          style={{ textAlign: "center", marginTop: 100, color: "white" }}
        >
          <h1>{status}</h1>
        </section>
      );
  }
}
