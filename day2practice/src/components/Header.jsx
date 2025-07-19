import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="https://img.freepik.com/premium-vector/food-finder-logo-restaurant-location-logo_658057-87.jpg" alt="logo" />
      </div>
      <div className='nav-items'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
