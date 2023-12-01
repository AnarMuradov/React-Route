import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const MainLayaout = () => {
  return (
    <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}

export default MainLayaout