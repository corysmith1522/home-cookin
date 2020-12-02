import React, { Fragment } from 'react';
import './Orders.css'

export default function Orders(props) {
  return (
    <div>
      <h2>Your Past Orders</h2>
      <div>
        {
          props.orders.map(order => (
            <Fragment key={order.id}>
              <div className='user-order'>
                <p className='order-name'>{order.name_on_order}</p>
                <button className='clear-order-button'>Clear Order</button>
              </div>
            </Fragment>
          ))}
      </div>
    </div>
  )
}