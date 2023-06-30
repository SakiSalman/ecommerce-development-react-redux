import React from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './router/router.jsx'
import './assets/css/style.min.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/demo1.min.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
