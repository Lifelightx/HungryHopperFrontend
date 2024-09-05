import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Services'
import Contact from './pages/Contact'
import Layout from './Layout'
import About from './pages/About'
import LogIn from './components/LogIn'
import Services from './pages/Services'
import Cart from './pages/Cart'
import Order from './pages/Order'
function App() {
  const [showLogin, setShowLogin] = useState(false)
  const handleLogin = () => {
    setShowLogin(true)
  }
  return (
    <div>
      {showLogin && <LogIn onClose={() => setShowLogin(false)} />}
      <Router>
        <Routes>
          <Route path='/' element={<Layout onloginClick={handleLogin} />}>
            <Route path='' element={<Home />} />
            <Route path='/menu' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App
