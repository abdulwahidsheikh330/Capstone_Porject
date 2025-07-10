import React from 'react'
import './Checkout.styles.scss'
import CheckoutCards from './CheckoutCards'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
const Checkout = () => {
    const { cartItems ,  itemTotal } = useContext(CartContext)
    return (
        <div className='CheckOut'>
            <div className="titles">
                <div>Product</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price </div> 
                <div>Remove </div>
            </div>
            <div className="">
                {
                    cartItems.map(item => (
                     <CheckoutCards key = {item.id} CardDetails={item}/>
                    ))
                }
            </div>
            <div className="total-price">
                Total:${itemTotal}
            </div>
        </div>
    )
}

export default Checkout
