import { createContext } from "react";

const CartContext = createContext({
  items: [],
  quantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});


function cartReducer(state, action) {
    if(action.type === "ADD_ITEM"){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const updatedItems = [...state.items];
       if(existingCartItemIndex > -1 ){
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1
        }
        updatedItems[existingCartItemIndex] = updatedItem
       }else{
        updatedItems.push({...action.item, quantity: 1});
       }

       return { ...state, items: updatedItems}
    }

    if(action.type === "REMOVE_ITEM"){
        ///remove
    }
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, {items: [], totalAmount: 0})
  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;