import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import {assets} from './assets/assets'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Checkout from './pages/Checkout/Checkout' 
import MyCourses from './pages/Mycourses/Mycourses';

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/> 
          <Route path='/my-courses' element={<MyCourses/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App