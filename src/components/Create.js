import React, { useState } from 'react'
import Navbar from './Navbar'
import "../stylesheets/create.css"

const Create = () => {
  const initialNewRestaurant = { name: '', image: '', location: '', isFavorite: false}
  const [ newRestaurant, setNewRestaurant ]= useState(initialNewRestaurant)
  const { name, image, location, isFavorite } = newRestaurant

  function handleChange(e) {
    const { name, value } = e.target
    setNewRestaurant({...newRestaurant, [name]: value})
  }
  return (
    <div>
      <Navbar />
      {/* <div className="new-restaurant-form">
        <h2>New Restaurant</h2>
        <form>
          <label>Restaurant Name:</label>
          <input type="text" name='name' class='form-input' placeholder='Restaurant name...' value={name} onChange={handleChange}/>
          <label>Image Link:</label>
          <input type="text" name='image' class='form-input' placeholder='Image link...' value={image} onChange={handleChange}/>
          <label>Location:</label>
          <input type="text" name='location' class='form-input' placeholder='Location address...' value={location} onChange={handleChange}/>
          <input type="radio" class="form-check-input" name="favorite" id="radioButton" value={isFavorite} checked={isFavorite} />
          <label class="form-check-label" for="radioButton">Favorite</label>                   
          <button type="submit">Add Restaurant</button>
        </form>
      </div> */}
      <div className='new-restaurant-form'>
        <h2>New Restaurant</h2>
        <form>
          <div class="mb-3">
            <label for="restaurantName" class="form-label">Restaurant Name</label>
            <input type="text" class="form-control" id="restaurantName" aria-describedby="nameHelp"/>
            <div id="namelHelp" class="form-text">It could be your favorite restaurant...</div>
          </div>
          <div class="mb-3">
            <label for="restaurantImage" class="form-label">Image Link</label>
            <input type="text" class="form-control" id="restaurantImage"/>
          </div>
          <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input type="text" class="form-control" id="location"/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="favorite"/>
            <label class="form-check-label" for="favorite">Favorite</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      
      
    </div>
  )
}

export default Create