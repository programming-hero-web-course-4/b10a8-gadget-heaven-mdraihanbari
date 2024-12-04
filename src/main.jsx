import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Chart from './components/Chart/Chart.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage> ,
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"gadgets/:product_id",
        loader: ()=> fetch('/gadgets.json'),
        element:<ProductDetails></ProductDetails>

      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        loader: ()=> fetch('/gadgets.json'),
      },
      {
        path:"/statistics",
        element: <Chart></Chart>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
