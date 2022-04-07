import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from 'routes/Home'
import About from 'routes/About'
import ProductDetails from 'routes/ProductDetails'
import NotFound from 'routes/NotFound'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={ <Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/servicos/:slang" element={<ProductDetails />} />
    <Route path="*" element={ <NotFound /> } />
  </Routes>
)

export default AppRoutes
