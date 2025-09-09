import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'
import { githubInfoLoader } from './components/GitHub/GitHub.jsx'

//React router---------------------------
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index:true,
        element:<Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element:<Contact/>
      },
      {
        path: "user/:id",
        element:<User/>
      },
      { loader:githubInfoLoader,// use only when we using loader
        path: "github",
        element:<GitHub/>
      }
    ]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
