import React from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pepperoni Pizza",
    description: "crispy, salty round  pepperoni",
    price: 22.99,
  },

  {
    id: "m2",
    name: "Cheese Pizza",
    description: "Emmental, Romano and pizza cheeses!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Veggie Pizza",
    description: "Finnest mushrooms, eggplant onions",
    price: 12.99,
  },

  {
    id: "m4",
    name: " Meat Pizza",
    description: "Pile of beef and sausage a hearty meal.",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
