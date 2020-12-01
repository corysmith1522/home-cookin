import { useState} from 'react';
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className='Register' onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
      <h2 className='register-title'>Register</h2>
      <div className='register-username'>
        <label htmlFor='username' className='register-label-username'>Username</label>
          <input
            className='register-username-input'
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
      </div>
      <div className='register-email'>
        <label htmlFor='email' className='register-label-email'>Email</label>
          <input
            className='register-email-input'
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
      </div>
      <div className='register-phone-number'>
        <label htmlFor='phone_number' className='register-label-phone-number'>Phone Number</label>
          <input
            className='register-phone-number-input'
            type='text'
            name='phone_number'
            placeholder='ex: 123-456-7890'
            value={formData.phone_number}
            onChange={handleChange}
          />
      </div>
      <div className='register-password'>
      <label htmlFor='password' className='register-label-password'>Password</label>
        <input
          className='register-password-input'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button className='register-submit'>Submit</button>
    </form>
  )
}