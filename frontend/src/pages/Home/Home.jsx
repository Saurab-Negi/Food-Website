import { useState } from 'react'
import Explore from '../../components/Explore/Explore'
import Header from '../../components/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory]= useState("All");

  return (
    <div>
      <Header/>
      <Explore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
