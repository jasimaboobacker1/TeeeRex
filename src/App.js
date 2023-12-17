import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Wishlist from './Components/Wishlist'

function App() {
  return (
    // <Routes>
    // <Route path='/' element={<Landing/>}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
  )
}

export default App