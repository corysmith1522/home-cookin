import React, { useState } from 'react';
import SelectFromMenu from '../components/SelectFromMenu';

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
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleCreate(formData);
      }}>
      <h2>Your New Order</h2>
      <label htmlFor='name_on_order'>Name</label>
      <input
        type='text'
        name='name_on_order'
        value={formData.name_on_order}
        onChange={handleChange}
        />
      <SelectFromMenu />
      <button>Submit</button>
      </form>
    </div>
  )
}