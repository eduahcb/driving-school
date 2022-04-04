import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import ThemeProvider from 'styles/ThemeProvider'
import GlobalStyle from 'styles/GlobalStyle'

import Home from 'routes/Home'
import About from 'routes/About'
import ProductDetails from 'routes/ProductDetails'

function App () {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
