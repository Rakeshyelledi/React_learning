import React from 'react'
import Resturantcards from './Resturantcards'

const Body = () => {
  return (
    <div className='body'>
      <div className="search">Search</div>
      <div className="res-container">
        <Resturantcards/>
      </div>
    </div>
  )
}

export default Body
