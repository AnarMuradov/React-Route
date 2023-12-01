import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
        <NavLink className={({ isActive }) =>
     isActive ? "active" : ""
  } to={"/"}>Home</NavLink>
   <NavLink to={"/Products"} >Products</NavLink>
        <NavLink to={"/Contact"} >Contact</NavLink>
    </div>
  )
}

export default Navbar