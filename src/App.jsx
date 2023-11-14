import './App.css'
import { useHome } from './hooks/home/useHome'
import Navbar from './components/navbar/Navbar'
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import QuickView from './components/quickview/QuickView'

function App() {

  

  return (
    <div className='flex-col bg-gray-100   dark:bg-black dark:text-white h-min-[400px] h-auto fontfam'>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/QuivkView/:id' element={<QuickView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
        </div>
  )
}

export default App
