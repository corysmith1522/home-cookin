import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SelectFromMenu from '../components/SelectFromMenu';

export default function EditOrder(props) {
  const [formData, setFormData] = useState({
    name_on_order: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const orderItem = props.orders.find(order => order.id === Number(id));
      setFormData({
        name: orderItem.name_on_order
      })
    }
    if (props.orders.length) {
      prefillForm();
    }
  }, [props.orders])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id, formData);
    }}>
      <h2>Edit Order</h2>
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
  )
}