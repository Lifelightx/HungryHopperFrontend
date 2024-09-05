import { createContext, useEffect, useState } from "react";
import { food_list } from "./assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => { 
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId] > 1) {
                newCartItems[itemId] -= 1;
            } else {
                delete newCartItems[itemId];
            }
            return newCartItems;
        });
    };
    const getTotalCartAmount = ()=>{
        
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                totalAmount += cartItems[item]*food_list.find(food=>food._id===item).price;

            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children} 
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
