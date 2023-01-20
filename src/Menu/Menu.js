import React from 'react'
import "./Menu.css"
import Home from '../Home'
import About from '../About'
import Contact   from '../Contact'
import {createBrowserRouter,RouterProvider,Navigate}  from 'react-router-dom'
export const Menu = () => {
  const router=createBrowserRouter([
   {
     path:'/home',
     element:<Home />
   },
   {
    path:'/about',
    element:<About />
   },
   {
    path:'/contact',
    element:<Contact />
   },
   {
    path:'*',
    element: <Navigate to='/home'/>
   }
  ])
  return (
    <div>
        <div className='menu'>
            <a href='/home'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
        </div>
        <RouterProvider router={router} />
    </div>
  )
}
