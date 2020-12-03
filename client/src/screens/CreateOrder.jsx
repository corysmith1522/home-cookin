import React, { useState } from 'react';

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
    <form>
      <h2>Your New Order</h2>
      <label htmlFor='name_on_order'>Name</label>
      <input
        type='text'
        name='name_on_order'
        value={formData.name_on_order}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}