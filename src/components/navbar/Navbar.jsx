import React, { useState,useEffect } from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
import Login from '../feature/login/Login'
import Signup from '../feature/signup/Signup'
import { useNav } from '../../hooks/useNav'
import {useSelector,useDispatch} from 'react-redux'
import {getUser,getCart} from '../feature/user/userSlicer'
const userDetails = localStorage.getItem('user')
import { useLogin } from '../../hooks/login/useLogin'
import { useHome } from '../../hooks/home/useHome'



const Navbar = () => {
 const [search,setSearch] = useState("")
  const {handleLogin,handleSignup,logincross,signupcropss} = useNav()
  const {tooglethem,mode} = useHome()
  const {user,sum} = useSelector((state)=>state.user) 
  const dispatch = useDispatch()
  const {handleLogout} = useLogin()
  useEffect(() => {
    dispatch(getUser(JSON?.parse(userDetails)))
    
  }, [])

  function handleSearch (e) {
      e.preventDefault()
      console.log(search)
  

  }

  

  return (
    <div className="fixed bg-slate-200 top-[20px] p-2 rounded dark:bg-gray-800 w-auto ml-10 z-10">
      <div className='w-[92vw] mr-[2px] flex items-center justify-center'>
      <ul className='flex flex-wrap justify-between items-center'>
         <NavLink className='xl:text-3xl ml-[10px] md:text-2xl'>AbhileshCart</NavLink>
          <NavLink to={"/"} className='xl:text-xl hover:text-gray-400 ml-[6px]' >Home</NavLink>
          <NavLink to={'/tracker'} className='xl:text-xl hover:text-gray-400 ml-[6px]'>Tracker</NavLink>
          <NavLink to={"/contact"} className='xl:text-xl hover:text-gray-400 ml-[6px]'>ContactUs</NavLink>
          <NavLink className='xl:text-xl hover:text-gray-400 ml-[6px]'>Dropdown <i className="ri-arrow-drop-down-line"></i></NavLink>

          <form  onSubmit={handleSearch}>
          <input type='text' className='p-1 rounded  md:ml-[40px] md:w-[150px]  xl:ml-[60px] xl:w-[300px] dark:bg-slate-600 ' onChange={(e)=>setSearch(e.target.value)} required />
         
          {search.length>0 ? <NavLink to={`/search/${search}`} className='xl:text-xl hover:text-gray-400 ml-[10px]'><button type='submit'>Search</button></NavLink>:<button type='submit' className='xl:text-xl hover:text-gray-400 ml-[10px]'>Search</button>}
          </form>
        {user ?
         <div className='xl:text-xl ml-2 flex'><div>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div><div><li className='text-xl hover:text-gray-400 ml-[10px] cursor-pointer' onClick={handleLogout}  >Logout</li></div></div>:

        <div className='flex'><div><li className="xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer" onClick={handleLogin} >Login</li></div><div><li className='xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer' onClick={handleSignup}>Signup</li></div></div>}

          <NavLink to={"/cart"} className='xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer'>Cart<span>({sum})</span></NavLink>
          
          <li>{mode === "Dark" ? < i className="ri-sun-line ml-2 cursor-pointer" onClick={tooglethem}></i>: <i className="ri-moon-line ml-2 cursor-pointer"  onClick={tooglethem}></i>}</li>
        </ul>
        {logincross==="login" && <Login />}
        {signupcropss==="signup" && <Signup />}
      </div>
       
  </div>

  )
}

export default Navbar