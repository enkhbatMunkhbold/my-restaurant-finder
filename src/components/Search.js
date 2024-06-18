import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
      <Navbar />
      <h1>Search</h1>
      <div class="input-group">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button>
      </div>
    </div>
  )
}

export default Search