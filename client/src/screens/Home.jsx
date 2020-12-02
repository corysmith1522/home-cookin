import React from 'react';
import chicken from '../assets/hot-honey-chicken.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className='home-screen'>
      <p className='blurb'>
        Welcome to Lara's! Our mission is to make you feel at Home
        in our kitchen, just as our namesake has for years in her own
        home. Each meal is crafted with care and love, so let us go to
        work bringing you a home-cooked meal filled with flavor and comfort!
      </p>
      <img src={chicken} alt='honey-chicken' className='home-image' />
    </div>
  )
}