import React, { useState } from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
import Login from '../feature/login/Login'
import Signup from '../feature/signup/Signup'
import { useNav } from '../../hooks/useNav'

const Navbar = () => {
  const {handleLogin,handleSignup,login,signup} = useNav()

  return (
    <div className="fixed bg-slate-200 top-[20px] p-2 rounded dark:bg-gray-800 w-auto mr-20 ml-10">
      <div className='w-full flex items-center'>
      <ul className='flex flex-wrap items-center'>
          <li className='text-3xl'>AbhileshCart</li>
          <li className='text-xl hover:text-gray-400' >Home</li>
          <li className='text-xl hover:text-gray-400'>Tracker</li>
          <li className='text-xl hover:text-gray-400'>ContactUs</li>
          <li className='text-xl hover:text-gray-400'>Dropdown</li>
          <input type='text' className='p-1 rounded ml-[300px]  dark:bg-slate-600' />
          <li className='text-xl hover:text-gray-400'>Search</li>
          <li className="text-xl hover:text-gray-400" onClick={handleLogin} >Login</li>
          <li className='text-xl hover:text-gray-400' >Logout</li>
          <li className='text-xl hover:text-gray-400' onClick={handleSignup}>Signup</li>
          <li className='text-xl hover:text-gray-400'>Cart</li>
        </ul>
        {login && <Login />}
        {signup && <Signup />}
      </div>
       
  </div>

  )
}

export default Navbar