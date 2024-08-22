import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/mpslogo-3.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>MENDEPASTE</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}>
                <Link style={{ textDecoration: 'none', color: 'Black'}} to="/">Home</Link>{menu==="Home"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("Services")}}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Services">Services</Link>{menu==="Services"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("Products")}}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Products">Products</Link>{menu==="Products"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("AboutUs")}}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/AboutUs">AboutUs</Link>{menu==="AboutUs"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("ContactUs")}}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/ContactUs">ContactUs</Link>{menu==="ContactUs"?<hr/>:<></>}
            </li>
        </ul>

    </div>
  )
}

export default Navbar