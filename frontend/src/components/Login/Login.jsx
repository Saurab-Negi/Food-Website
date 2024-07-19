import { useState } from 'react'
import { assets } from '../../assets/assets';
import './Login.css'

const Login = ({setShowLogin}) => {

  const [currState, setCurrState]= useState("Login");

  return (
    <div className='login absolute z-10 w-full h-full bg-[#00000090] grid'>
      
      <form className="login-container place-self-center text-[#808080] bg-white flex flex-col rounded-lg
        lg:text-base lg:p-7 lg:gap-10">
        <div className="login-title flex justify-between items-center text-black">
          <h2 className='font-semibold lg:text-3xl'>{currState}</h2>
          <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} 
            className='cursor-pointer lg:w-4' alt="" />
        </div>
        <div className="login-input flex flex-col lg:gap-4">
          {
            currState==="Login" ? <></> : <input type="text" placeholder='Username' required />
          }
          
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button className='text-white bg-[tomato] rounded-lg lg:p-2 lg:text-base'>{currState==="Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-condition flex items-start lg:gap-1">
          <input className='lg:mt-1' type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {
          currState==="Login" ? <p>Create a new account? <span onClick={() =>setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() =>setCurrState("Login")}>Login here</span></p>
        }  
        
      </form>

    </div>
  )
}

export default Login
