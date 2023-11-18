import React from 'react'

const RoutesContain = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/QuivkView/:id' element={<QuickView />} />
      <Route exact path='/Cart' element={<Cart />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/search/:search' element={<Search />} />
      <Route exact path='/tracker' element={<Tracker />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default RoutesContain