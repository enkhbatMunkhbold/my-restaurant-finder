import Home from './Home';
// import Navbar from './Navbar';
import ErrorPage from './components/ErrorPage';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
]