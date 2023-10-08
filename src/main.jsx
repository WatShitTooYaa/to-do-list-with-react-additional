import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './router/home.jsx'
import {ToDo} from './router/list.jsx'
import CssTry from './router/try_css.jsx'
import Navbar from './router/navbar.jsx'
import Naver from './router/nav_public.jsx'
import Tryjs from './router/testjs.jsx'
import Object from './router/object.jsx'
import Sidebar from './router/sidebar.jsx'
import ErrorElement from './router/error.jsx'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
    errorElement : <ErrorElement />
  },
  {
    path : "/list",
    // element : <List/>
    element : <ToDo/>
  },
  {
    path : "/app",
    element : <App />
  },
  {
    path : "/css",
    element : <CssTry/>
  },
  {
    path : "/js",
    element : <Tryjs/>
  },
  {
    path : "/object",
    element : <Object/>
  }
])

// ReactDOM.createRoot(document.getElementById('navbar-root')).render(
//   <React.StrictMode>
//     <Navbar/>
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    {/* <Naver/> */}
    <Sidebar/>
    <RouterProvider router = {router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
