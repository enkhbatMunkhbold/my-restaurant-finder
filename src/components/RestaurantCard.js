import React, { useState } from 'react'
import "../stylesheets/card.css"

const RestaurantCard = ({ restaurant }) => {

  const { id, name, image, location, isFavorite } = restaurant
  const [ favorite, setFavorite ] = useState(isFavorite)

  console.log('restaurant:', restaurant)

  return (
    <li className='card'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>Location: {location}</p>      
    </li>
  )
}

export default RestaurantCard