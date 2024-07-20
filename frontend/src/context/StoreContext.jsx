import { createContext, useEffect, useState } from 'react'
import './StoreContext.css'
import { food_list } from '../assets/assets'
import { toast } from 'react-toastify';

export const StoreContext = createContext(null)

const StoreContextProvider= (props) =>{

    const [cartItems, setCartItems]= useState({});

    const addToCart= (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev) =>({...prev,[itemId]:1}))
            toast("Added to cart");
        }
        else{
            setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
            toast("Added to cart");
        }
    }

    const removeFromCart= (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
        toast("Removed from cart");
    }

    const getTotalCartAmt= () =>{
        let totalAmt= 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo= food_list.find((product) =>
                    product._id===item);
                    totalAmt+= itemInfo.price * cartItems[item];
            }
        }
        return totalAmt;
    }

    const contextValue= {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmt
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;