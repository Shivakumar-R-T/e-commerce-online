import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart/Cart'

import ProductList from './Components/ProductsList/ProductList'
import Welcome from './Components/Welcome/Welcome'

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default CustomRoutes