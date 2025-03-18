import React, { useContext } from 'react'
import { currecyFormatter } from '../utils/formatting'
import Button from './UI/Button'
import CartContext from '../store/CartContext'

const MealItem = ({meal}) => {

  const cartCtx = useContext(CartContext);

  function handleAddToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
        <div>
          <h3>{meal.name}</h3>
          <p className='meal-item-price'>{currecyFormatter.format(meal.price)}</p>
          <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-item-actions'>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  )
}

export default MealItem
