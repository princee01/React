import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import { RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element:<Navbar/>
  },
  {
    path: '/login',
    element:<><Navbar/><Login/></>
  }
])

  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
