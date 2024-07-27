import './Navbar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu]= useState("Home");

  const {getTotalCartAmt, token, setToken}= useContext(StoreContext);

  const navigate= useNavigate();

  const logout= () =>{
    localStorage.removeItem("token")
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar flex justify-between items-center w-full p-4
    md:p-6 lg:p-8'>

      <Link to="/"><img src={assets.logo}
      className='logo w-16 sm:w-28 lg:w-40' alt="" /></Link>
      <ul className='navbar-menu hidden list-none text-[#49557e] font-semibold
         md:flex md:gap-12 md:text-sm lg:text-lg'>
        <Link to="/" onClick={() =>setMenu("Home")} className={menu==="Home" ? "active" : ""}>Home</Link>
        <a href='#explore' onClick={() =>setMenu("Menu")} className={menu==="Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() =>setMenu("Mobile-App")} className={menu==="Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() =>setMenu("Contact Us")} className={menu==="Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>
      
      <div className="navbar-right flex items-center gap-4
      md:gap-6 lg:gap-8">
        <img className='w-3 sm:w-4 lg:w-5' src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
            <Link to="/cart"><img className='w-4 sm:w-5 lg:w-6' src={assets.basket_icon} alt="" /></Link>
            {
              getTotalCartAmt()===0 ? "" :
              <div className="dot absolute min-w-2 min-h-2 bg-[tomato] rounded-full -top-1 -right-2 lg:-top-2 lg:-right-2 "></div>
            }            
        </div>
        {
          !token ?
          <button onClick={() =>setShowLogin(true)} className='bg-[#FF4C4C] text-[0.5rem] px-2 py-1 text-white rounded-3xl shadow-customBtn
          sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:text-lg'>Sign In</button> :
          <div className="navbar-profile relative cursor-pointer">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown absolute hidden right-0 z-10">
              <li onClick={() =>navigate('/myorder')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
        
      </div>

    </div>
  )
}

export default Navbar
