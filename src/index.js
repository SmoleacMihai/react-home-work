import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home';
import ContactsPage from './pages/contacts';
import ProfilePage from './pages/profile';
import AboutPage from "./pages/about";
import ProductsPage from "./pages/products";
import ShopingCartPage from "./pages/shopingCart";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/contacts",
    element: <ContactsPage/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/shopping-cart",
    element: <ShopingCartPage />,
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
