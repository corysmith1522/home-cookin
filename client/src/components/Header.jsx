import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css'

export default function Header(props) {
  const { currentUser } = props;
  return (
    <nav className='Header'>
      <div className='nav-links'>
        <div className='left-links'>
          <Link to='/menu' className='menu-link'>Menu</Link>
        </div>
        <div className='title-container'>
          <Link to='/' className='app-title'><h1 >Lara's Home Cookin</h1></Link>
        </div>
        <div className='right-links'>
          {
          currentUser ? 
            <>
              <Link to='/orders' className='my-order-link'>My Orders</Link>
              <Link to='/createorder' className='new-order-link'>New Order</Link>
            </>
            :
            <Link to='/login' className='initial-login-link'>Login/Register</Link>
          }
          </div>
      </div>
    </nav>
  )
}