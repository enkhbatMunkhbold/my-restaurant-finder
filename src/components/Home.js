import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import RestaurantList from './RestaurantList';

const Home = () => {

  const [ restaurants, setRestaurants ] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/restaurants')
     .then(res => res.json())
     .then(restaurants => setRestaurants(restaurants))
  }, [])

  console.log('restaurants in Home:', restaurants)
  return (
    <div>
      <Navbar />
      <RestaurantList restaurants={restaurants}/>
    </div>
  )
}

export default Home