import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  quantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
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
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex]; 
        const updatedItems = [...state.items]

        if (existingCartItem.quantity === 1) {
          updatedItems = updatedItems.filter(item => item.id !== action.item.id);
        }else{
          const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity - 1};
          updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems}
    }

    return state
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []})

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    };

    function addItem(item) {
        dispatchCartAction({type: "ADD_ITEM", item: item});
    }

    function removeItem(id) {
        dispatchCartAction({type: "REMOVE_ITEM", item: {id: id}});
    }

    console.log(cartContext)

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;