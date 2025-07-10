import React from 'react'
import './CartItem.styles.scss'
const CartItem = (props) => {
  const { name, imageUrl, price, quantity } = props.cartItem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <div className='name'>{name}</div>
        <span className="price">{quantity}x${price}</span>
      </div>
    </div>
  )
}
import './CartItem.styles.scss'
export default CartItem
