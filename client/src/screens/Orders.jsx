import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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
                <p><Link to={`/orders/${order.id}/edit`} className='order-name'>{order.name_on_order}</Link></p>
                <button
                  className='clear-order-button'
                  onClick={() => props.handleDelete(order.id)}>Clear Order</button>
              </div>
            </Fragment>
          ))}
      </div>
    </div>
  )
}