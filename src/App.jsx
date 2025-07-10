import React from 'react'
import Home from './routes/home/home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './routes/Navigation/Navbar'
import Shop from './routes/shop/shop'
import AuthenticateUser from './routes/AuthenticateUsers/Authenticate'
import Checkout from './routes/Checkout/checkout'
const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} ></Route>
        <Route path='auth' element={<AuthenticateUser />} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>

    </Routes>

  )
}

export default App
