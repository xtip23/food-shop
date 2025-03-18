import { use, useState } from "react";
import { createContext } from "react";

export const UserProgressContext = createContext({
  progress: '', // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('')

    function showCart(){
        setUserProgress('cart')
    }
    function showCheckout(){
        setUserProgress('checkout')
    }
    function hideCart(){
        setUserProgress('')
    }
    function hideCheckout(){
        setUserProgress('')
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return <UserProgressContext.Provider value={userProgressCtx}>
        {children}
    </UserProgressContext.Provider>
}