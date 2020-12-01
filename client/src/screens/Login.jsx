import { useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
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
    <form className='Login' onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h2 className='welcome-back'>Welcome Back!</h2>
      <div className='login-username'>
        <label htmlFor='username' className='login-label-username'>Username</label>
          <input
            className='login-username-input'
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
      </div>
      <div className='login-password'>
      <label htmlFor='password' className='login-label-password'>Password</label>
        <input
          className='login-password-input'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button className='login-submit'>Submit</button>
      <p className='new-to-lara'>New to Lara's?</p>
      <Link to='/register' className='register-here-link'>Register Here!</Link>
    </form>
  )
}