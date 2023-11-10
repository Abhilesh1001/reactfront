import { useEffect, useState } from 'react'
import './App.css'
import { useHome } from './hooks/home/useHome'
import Navbar from './components/navbar/Navbar'
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

function App() {
  const { tooglethem, mode } = useHome()

  return (
    <div className='flex-col bg-gray-100   dark:bg-black dark:text-white h-min-[400px] h-auto'>
      <button className=' text-white bg-black  dark:bg-white dark:text-black p-2 rounded absolute right-10 top-10' onClick={tooglethem}>{mode} Mode</button>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
        </div>
  )
}

export default App
