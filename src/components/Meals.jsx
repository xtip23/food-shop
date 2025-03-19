import React, { useState, useEffect } from 'react'
import MealItem from './MealItem'
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {}

const Meals = () => {

    // const [meals, setMeals] = useState([])

    // useEffect(() => {
    //     async function fetchMeals() {
    //         const response = await fetch('http://localhost:3000/meals')

    //         if (!response.ok) {
    //             throw new Error('Something went wrong!')
    //         }
    //         const data = await response.json()
    //         setMeals(data)
    //     }
    //     fetchMeals()
    // }, [])

    const {data: loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading){
        return <p>Fetching meals...</p>
    }

    if(error){
        return <Error title="Failed to fetch meals" message={error} />
    }

    // if(!loadedMeals){
    //     return <p>No meals found!</p>
    // }

  return (
    <ul id="meals">
      {loadedMeals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  )
}

export default Meals
