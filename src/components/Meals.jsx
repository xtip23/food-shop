import React, { useState, useEffect } from 'react'
import MealItem from './MealItem'

const Meals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals')

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()
            setMeals(data)
        }
        fetchMeals()
    }, [])

  return (
    <ul id="meals">
      {meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  )
}

export default Meals
