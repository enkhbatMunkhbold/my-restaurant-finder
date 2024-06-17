import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
// import RestaurantList from './RestaurantList';
// import Create from './Create';
// import Search from './Search';
import Home from './Home';

function App() {

  // const [ restaurants, setRestaurants ] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:6001/restaurants')
  //    .then(res => res.json())
  //    .then(restaurants => setRestaurants(restaurants))
  // }, [])

  // console.log('restaurants:', restaurants)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home restaurants={restaurants}/>} />
        {/* <Route exact path='/'>
          <Home restaurants={restaurants}/>
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/new'>
          <Create />
        </Route>
        <Route exact path='/restaurants'>
          <RestaurantList restaurants={restaurants}/>
        </Route>  */}
      </Routes>      
    </div>
  );
}

export default App;
