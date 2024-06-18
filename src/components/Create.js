import React, { useState } from 'react'
import Navbar from './Navbar'
import "../stylesheets/create.css"

const Create = () => {
  const initialNewRestaurant = { name: '', image: '', location: '', isFavorite: false}
  const [ newRestaurant, setNewRestaurant ]= useState(initialNewRestaurant)
  
  const { name, image, location, isFavorite } = newRestaurant
  const [ like, setLike ] = useState(isFavorite)

  function handleChange(e) {
    const { name, value } = e.target
    setNewRestaurant({...newRestaurant, [name]: value})
  }

  function handleCheck(e) {
    const { name, checked } = e.target
    setLike(prevState => !prevState)
    setNewRestaurant({...newRestaurant, [name]: like})

    // console.log('checked:', checked)
    // console.log('name:', name)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRestaurant)
    })
     .then(res => res.json())
     .then(restaurant => {
        console.log(restaurant)
        setNewRestaurant(restaurant)
      })
  }

  return (
    <div>
      <Navbar />
      <div className='new-restaurant-form'>
        <h2>New Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
            <input type="text" className="form-control" 
              name="name" aria-describedby="nameHelp" 
              value={name} onChange={handleChange}
            />
            <div id="namelHelp" className="form-text">It could be your favorite restaurant...</div>
          </div>
          <div className="mb-3">
            <label htmlFor="restaurantImage" className="form-label">Image Link</label>
            <input type="text" className="form-control" 
              name="image" value={image} onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input type="text" className="form-control" 
              name="location" value={location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" 
              name="favorite" value={like} checked={like}
              onChange={handleCheck}
            />
            <label className="form-check-label" htmlFor="favorite">Favorite</label>
          </div>
          <button type="submit" className="btn btn-light">Submit</button>
        </form>
      </div>      
    </div>
  )
}

export default Create