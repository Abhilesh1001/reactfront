import './App.css'
import Navbar from './components/navbar/Navbar'
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import QuickView from './components/quickview/QuickView'
import Cart from './components/addcart/Cart'
import Contact from './components/contact/Contact'
import Search from './components/search/Search'
import Tracker from './components/tracker/Tracker'


function App() {

  return (
    <div className='flex-col bg-gray-100   dark:bg-black dark:text-white h-min-[400px] h-auto fontfam'>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/QuivkView/:id' element={<QuickView />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/search/:search' element={<Search />} />
          <Route exact path='/tracker' element={<Tracker />} />
        </Routes>
        <Footer />
      </BrowserRouter>
        </div>
  )
}

export default App
