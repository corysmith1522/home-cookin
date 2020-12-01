import React from 'react';
import twitter from '../assets/TwitterLogo_burgundy.png'
import instagram from '../assets/new-instagram-logo-burgundy.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className='Footer'>
      <img src={twitter} alt='twitter-logo' className='twitter-logo' />
      <h3 className='footer-text'>Follow us @larahomecookin</h3>
      <img src={instagram} alt='instagram-logo' className='instagram-logo' />
    </div>
  )
}