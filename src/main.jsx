import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter, Routes, Route} from "react-router-dom"
import HomePage from './landing_page/home/HomePage'
import './index.css'
import Signup from './landing_page/signup/Signup.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Login from './landing_page/login/Login.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter >
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/product' element={<ProductPage/>} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/support' element={<SupportPage/>} />
      <Route path='/login' element={<Login/>} />

      <Route path='*' element={<NotFound />}/>
    </Routes>
    <Footer/>
  </HashRouter>
)
