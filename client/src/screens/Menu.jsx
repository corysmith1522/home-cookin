import React, { Fragment } from 'react';
import './Menu.css'

export default function Menu(props) {
  return (
    <div className='menu-container'>
      <h2>Our Menu</h2>
      <div className='meal-container'>
        {
          props.meals.map(meal => (
            <Fragment key={meal.id}>
              <div className='item-container'>
              <img src={meal.image} alt={meal.name} className='meal-image' />
              <div className='meal-detail-container'>
                <div className='meal-name-price'>
                  <p className='meal-name'>{meal.name}</p>
                  <p className='meal-price'>${meal.price}</p>
                </div>
                <p className='meal-description'>{meal.description}</p>
              </div>
              </div>
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}