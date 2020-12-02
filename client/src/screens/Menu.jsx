import React, { Fragment } from 'react';

export default function Menu(props) {
  return (
    <div>
      <h2>Our Menu</h2>
      <div>
        {
          props.meals.map(meal => (
            <Fragment key={meal.id}>
              <img src={meal.image} alt={meal.name} className='meal-image' />
              <h3>{meal.name}</h3>
              <h5>{meal.price}</h5>
              <p>{meal.description}</p>
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}