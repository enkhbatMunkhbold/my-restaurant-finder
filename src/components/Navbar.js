import React from 'react';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1" >Restaurant Finder
          <img className='logo' src='../restaurant.png' alt='restaurant logo...'/>
        </span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex px-3" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Search</a>
            <a class="nav-link" href="#">Create</a>
          </div>
        </div>
      </div>
</nav>
    </div>
  )
}

export default Navbar