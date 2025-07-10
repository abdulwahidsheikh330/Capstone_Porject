import React from 'react'
import './CheckOutCards.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
const CheckoutCards = ({ CardDetails }) => {

    const { imageUrl, name, quantity, price } = CardDetails
    const {addItemsToCart , reduceItemFromCart , removeItemFromCart}=useContext(CartContext)
    const addProductToCart=()=>addItemsToCart(CardDetails)
    const removeProductFromCart=()=>reduceItemFromCart(CardDetails)

    const deleteProductFromCart=()=>removeItemFromCart(CardDetails)
    return (
        <div>
            <div className='checkout-cards-container'>
                <img className='image' src={imageUrl} alt={name} />
                <div className='name'>{name}</div>
                <div className='quantity-toogler'>
                    <button onClick={removeProductFromCart}>&#10094;</button>
                    <span>{quantity}</span>
                    <button onClick={addProductToCart}>&#10095;</button>
                </div>
                <div className='price'>{price*quantity}</div>
                <button className='remove' onClick={deleteProductFromCart}>&#10005;</button>
            </div>
        </div>
    )
}

export default CheckoutCards
