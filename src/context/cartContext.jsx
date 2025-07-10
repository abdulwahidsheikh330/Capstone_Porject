import { useState, createContext , useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id == productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const reduceCartItem = (cartItems, productToReduce) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToReduce.id);

    if(existingCartItem.quantity==1)
    {
        return cartItems.filter((cartItem)=>cartItem.id!=productToReduce.id)
    }
   
        return cartItems.map((cartItem) =>
            cartItem.id == productToReduce.id
                ? {...cartItem, quantity: cartItem.quantity - 1 } 
                : cartItem
        );

  
}
const removeCartItem = (cartItems, productToRemove) => {

    return cartItems.filter((cartItem)=>cartItem.id!=productToRemove.id)
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemsToCart: () => { },
    reduceItemFromCart:()=>{},
    removeItemFromCart:()=>{},
    cartCount:0, 
    itemTotal:0
})

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount,setCartCount] =useState(0)
    const [itemTotal, setItemTotal]=useState(0)

    useEffect(()=>{
        const newItemTotal=cartItems.reduce((total,cartItem)=>{
            return total+cartItem.price*cartItem.quantity
        },0)
        setItemTotal(newItemTotal)
    },[cartItems])
    useEffect(()=>{
        const newCartCount=cartItems.reduce((total,cartItem)=>{
            return total+cartItem.quantity
        },0)
        setCartCount(newCartCount)
    },[cartItems])
    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const reduceItemFromCart=(productToReduce)=>{
        setCartItems(reduceCartItem(cartItems, productToReduce))
    }
    const  removeItemFromCart=(productToRemove)=>{
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
   
    const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems , cartCount , reduceItemFromCart,removeItemFromCart , itemTotal }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}