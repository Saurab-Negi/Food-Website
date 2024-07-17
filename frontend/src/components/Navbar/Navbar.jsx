import './Navbar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu]= useState("Home");

  return (
    <div className='navbar flex justify-between items-center p-8'>

      <img src={assets.logo} className='logo w-40' alt="" />
      <ul className='navbar-menu flex list-none gap-10 text-[#49557e] font-semibold text-lg'>
        <li onClick={() =>setMenu("Home")} className={menu==="Home" ? "active" : ""}>Home</li>
        <li onClick={() =>setMenu("Menu")} className={menu==="Menu" ? "active" : ""}>Menu</li>
        <li onClick={() =>setMenu("Mobile-App")} className={menu==="Mobile-App" ? "active" : ""}>Mobile-App</li>
        <li onClick={() =>setMenu("Contact Us")} className={menu==="Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>
      
      <div className="navbar-right flex items-center gap-8">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search_icon relative">
            <img src={assets.basket_icon} alt="" />
            <div className="dot absolute min-w-2 min-h-2 bg-[tomato] rounded-full -top-2 -right-2 "></div>
        </div>
        <button className='bg-[#FF4C4C] text-lg text-white px-6 py-2 rounded-3xl shadow-customBtn'>Sign In</button>
      </div>

    </div>
  )
}

export default Navbar
