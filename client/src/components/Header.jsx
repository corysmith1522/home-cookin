import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css'

export default function Header() {
  return (
    <div className='Header'>
      <Link to='/menu' className='menu-link'>Menu</Link>
      <h1 className='app-title'>Lara's Home Cookin</h1>
      <Link to='/login' className='initial-login-link'>Login/Register</Link>
    </div>
  )
}