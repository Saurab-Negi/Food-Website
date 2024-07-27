import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order"
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

export default function App() {

  const [showLogin, setShowLogin]= useState(false);

  return (
    <div className="app">
      {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}

      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/myorder" element={<MyOrders/>} />
      </Routes>
      <Footer/>
    </div>
  )
}