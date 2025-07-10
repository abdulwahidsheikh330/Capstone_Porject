import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './CartDropdown.styles.scss'
import Button from '../button/button'
import CartItem from '../cart-item/CartItem'
import { Link } from 'react-router-dom'
const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {
                    cartItems.length ? ( cartItems.map(item =>( 
                        <CartItem key={item.id} cartItem={item} />
                    ))): (
                        <span className='EmptyCart'>Your Cart is Empty</span>
                    )
                   
                }
            </div> 
            <Link  to='/Checkout'><Button>GO TO CHECK OUT</Button></Link>
        </div>
    )
}

export default CartDropdown
