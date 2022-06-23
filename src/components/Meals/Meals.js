import React from 'react'
import MealsAvailable from './MealsAvailable'
import MealsSummary from './MealsSummary'

export default function Meals() {
  return (
    <section>
      <MealsSummary />
      <MealsAvailable />
    </section>
  )
}
