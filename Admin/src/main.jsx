import React from 'react'
import ReactDOM from 'react-dom/client'
import  './assets/css/bootstrap.min.css'
import  './assets/css/feathericon.min.css'
import  './assets/css/select2.min.css'
import  './assets/css/style.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './assets/plugins/datatables/datatables.min.css'
import { Provider } from 'react-redux'
import store from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>

   <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
