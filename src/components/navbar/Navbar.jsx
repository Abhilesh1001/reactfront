import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Login from '../feature/login/Login'
import Signup from '../feature/signup/Signup'
import { useNav } from '../../hooks/useNav'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, getCart } from '../feature/user/userSlicer'
const userDetails = localStorage.getItem('user')
import { useLogin } from '../../hooks/login/useLogin'
import { useHome } from '../../hooks/home/useHome'
import { Hidden } from '@mui/material'



const Navbar = () => {
  const [search, setSearch] = useState("")
  const { handleLogin, handleSignup, logincross, signupcropss } = useNav()
  const { tooglethem, mode } = useHome()
  const { user, sum } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { handleLogout } = useLogin()
  const [hiddenmobile, setHiddenMobile] = useState('hidden')

  useEffect(() => {
    dispatch(getUser(JSON?.parse(userDetails)))

  }, [])

  function handleSearch(e) {
    e.preventDefault()
    console.log(search)
  }

  const handlemobileView = () => {

    setHiddenMobile(`${hiddenmobile === "hidden" ? '' : "hidden"}`)
    console.log(hiddenmobile)

  }

  return (
    <div className="fixed bg-slate-200 top-[20px] p-2 rounded dark:bg-gray-800 w-auto md:ml-10 ml-4 z-10">
      <div className='xl:w-[92vw] md:mr-2 flex items-center md:w-[90vw] w-[90vw]'>

        <ul className='lg:flex lg:flex-wrap lg:justify-between lg:items-center'>
          <Link to={"/"} className='xl:text-3xl ml-[10px] md:text-2xl'>AbhileshCart</Link>
          <div className='lg:hidden w-5 h-5 absolute right-12 top-[12px] dark:bg-gray-400' onClick={handlemobileView}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></div>

          {/* for desktop view  */}
          <div className='lg:flex hidden'>
            <Link to={"/"} className='xl:text-xl hover:text-gray-400 ml-[6px]' >Home</Link>
            <Link to={'/tracker'} className='xl:text-xl hover:text-gray-400 ml-[6px]'>Tracker</Link>
            <Link to={"/contact"} className='xl:text-xl hover:text-gray-400 ml-[6px]'>ContactUs</Link>
            <Link className='xl:text-xl hover:text-gray-400 ml-[6px]'>Dropdown <i className="ri-arrow-drop-down-line"></i></Link>
            <form onSubmit={handleSearch}>
              <input type='text' className='p-1 rounded  md:ml-[40px] md:w-[150px]  xl:ml-[60px] xl:w-[300px] dark:bg-slate-600 ' onChange={(e) => setSearch(e.target.value)} required />

              {search.length > 0 ? <Link to={`/search/${search}`} className='xl:text-xl hover:text-gray-400 ml-[10px]'><button type='submit'>Search</button></Link> : <button type='submit' className='xl:text-xl hover:text-gray-400 ml-[10px]'>Search</button>}
            </form>
            {user ?
              <div className='xl:text-xl ml-2 flex'><div>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div><div><li className='text-xl hover:text-gray-400 ml-[10px] cursor-pointer' onClick={handleLogout}  >Logout</li></div></div> :

              <div className='flex'><div><li className="xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer" onClick={handleLogin} >Login</li></div><div><li className='xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer' onClick={handleSignup}>Signup</li></div></div>}

            <Link to={"/cart"} className='xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer'>Cart<span>({sum})</span></Link>

            <li>{mode === "Dark" ? < i className="ri-sun-line ml-2 cursor-pointer" onClick={tooglethem}></i> : <i className="ri-moon-line ml-2 cursor-pointer" onClick={tooglethem}></i>}</li>
          </div>


          {/* for Mobile view  */}
          <div className={`lg:hidden ${hiddenmobile}`} >
            <div className='flex flex-col'>
              <Link to={"/"} className='xl:text-xl hover:text-gray-400 ml-[6px]' onClick={handlemobileView}  >Home</Link>
              <Link to={'/tracker'} className='xl:text-xl hover:text-gray-400 ml-[6px]' onClick={handlemobileView}>Tracker</Link>
              <Link to={"/contact"} className='xl:text-xl hover:text-gray-400 ml-[6px]'  onClick={handlemobileView}>ContactUs</Link>
              <Link className='xl:text-xl hover:text-gray-400 ml-[6px]'>Dropdown <i className="ri-arrow-drop-down-line"></i></Link>
            </div>

            <form onSubmit={handleSearch} >
              <div className='flex flex-col'>
                <input type='text' className='p-1 rounded  md:ml-[40px] md:w-[150px]  xl:ml-[60px] xl:w-[300px] dark:bg-slate-600 ' onChange={(e) => setSearch(e.target.value)} required />

                {search.length > 0 ? <Link to={`/search/${search}`} className='xl:text-xl hover:text-gray-400 ml-[10px] '><button type='submit'  onClick={handlemobileView}>Search</button></Link> : <button type='submit' className='xl:text-xl hover:text-gray-400 ml-[10px] flex items-center'  onClick={handlemobileView}>Search</button>}

                {user ?
                  <div className='xl:text-xl ml-2 flex flex-col'><div>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div><div><li className='text-xl hover:text-gray-400 ml-[10px] cursor-pointer' onClick={handleLogout}  >Logout</li></div></div> :

                  <div className='flex'><div><li className="xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer" onClick={handleLogin} >Login</li></div><div><li className='xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer' onClick={handleSignup}>Signup</li></div></div>}

                <div><Link to={"/cart"} className='xl:text-xl hover:text-gray-400 ml-[10px] cursor-pointer' onClick={handlemobileView}>Cart<span>({sum})</span></Link> </div>


              </div>

            </form>

            <li>{mode === "Dark" ? < i className="ri-sun-line ml-2 cursor-pointer" onClick={tooglethem}></i> : <i className="ri-moon-line ml-2 cursor-pointer" onClick={tooglethem}></i>}</li>
          </div>
          {/* end here  */}



        </ul>
        {logincross === "login" && <Login />}
        {signupcropss === "signup" && <Signup />}
      </div>

    </div>

  )
}

export default Navbar