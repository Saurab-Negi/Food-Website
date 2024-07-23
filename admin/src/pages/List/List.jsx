import { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import {  toast } from 'react-toastify';
import { MdDeleteForever } from "react-icons/md";

const List = ({url}) => {

  const [list, setList]= useState([]);

  const fetchList= async () =>{
    const response= await axios.get(`${url}/food/list`)
    // console.log(response.data);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood= async (foodId) =>{
    const response= await axios.post(`${url}/food/remove`, {id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(() =>{
    fetchList();
  },[])

  return (
    <div className='list add flexi w-4/5 bg-white m-4 p-8 rounded-xl'>
      
      <p className='text-3xl font-semibold'>All Food List</p>
      <div className="list-table my-8">
        <div className="list-table-format title bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item, i) =>{
            return(
              <div key={i} className="list-table-format text-[#545454]">
                <img className='w-16 rounded-md' src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <MdDeleteForever onClick={() =>removeFood(item._id)} className='text-2xl text-red-600 cursor-pointer' />
              </div>
            )
          })
        }
      </div>      

    </div>
  )
}

export default List
