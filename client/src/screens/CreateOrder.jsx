import React, { useState } from 'react';
import SelectFromMenu from '../components/SelectFromMenu';
import './CreateOrder.css'

export default function CreateOrder(props) {
  const [formData, setFormData] = useState({
    name_on_order: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className='create-container'>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleCreate(formData);
      }}>
      <h2>Your New Order</h2>
      <div className='new-order-name'>
        <label htmlFor='name_on_order' className='create-name-order'>Name for Order</label>
        <input
          className='create-order-name-input'
          type='text'
          name='name_on_order'
          value={formData.name_on_order}
          onChange={handleChange}
        />
        </div>
        <h3>Selection(s)</h3>
      <SelectFromMenu />
      <button className='create-order-submit'>Submit</button>
      </form>
    </div>
  )
}