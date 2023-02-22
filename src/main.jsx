import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import About from "./pages/about"
import Resources from "./pages/resources"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
