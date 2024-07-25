import { createContext, useEffect, useState } from 'react'
import './StoreContext.css'
import { toast } from 'react-toastify';
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider= (props) =>{

    const [cartItems, setCartItems]= useState({});

    const url= "http://localhost:3000"; // URL for everywhere

    const [token, setToken]= useState("");

    const [food_list, setFoodList]= useState([])

    const addToCart= async (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev) =>({...prev,[itemId]:1}))
            toast("Added to Cart");
        }
        else{
            setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
            toast("Added to Cart");
        }
        if(token){
            await axios.post(url+"/cart/add", {itemId}, {headers:{token}})
        }
    }

    const removeFromCart= async (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
        toast("Removed from Cart");
        if(token){
            await axios.post(url+"/cart/remove", {itemId}, {headers:{token}})
        }
    }

    const getTotalCartAmt = () => {
        let totalAmt = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) { // Check if itemInfo is not undefined
                    totalAmt += itemInfo.price * cartItems[item];
                } else {
                    console.warn(`Product with id ${item} not found in food_list`);
                }
            }
        }
        return totalAmt;
    };    

    const fetchFoodList= async () =>{
        const response= await axios.get(url+ "/food/list");
        setFoodList(response.data.data)
    }

    // On refreshing the web page cart items will be saved
    const loadCartData= async (token) =>{
        const response= await axios.post(url+"/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData)
    }

    // To avoid logout while page reloading
    useEffect(() =>{    
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue= {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmt,
        url,
        token, 
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;