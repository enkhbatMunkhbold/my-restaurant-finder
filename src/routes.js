import Home from "./components/Home";
import Search from "./components/Search";
import Create from "./components/Create";
import ErrorPage from "./components/ErrorPage";
import RestaurantCard from "./components/RestaurantCard";

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/search',
    element: <Search />,
    errorElement: <ErrorPage />
  },
  {
    path: '/create',
    element: <Create />,
    errorElement: <ErrorPage />
  },
  {
    path: '/restaurants/:id',
    element: <RestaurantCard />,
    errorElement: <ErrorPage />
  }
]

export default routes;