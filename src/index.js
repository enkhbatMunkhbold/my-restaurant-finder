import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/stylesheets/index.css';
import App from './components/Home';

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
