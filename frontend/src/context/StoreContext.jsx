import { createContext, useEffect, useState } from 'react'
import './StoreContext.css'
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider= (props) =>{

    const [cartItems, setCartItems]= useState({});

    const addToCart= (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev) =>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart= (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
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