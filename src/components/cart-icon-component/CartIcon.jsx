import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './CartIcon.styles.scss'
import CARTSVG from '../../assets/svg/shopping-bag.svg'
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,cartCount}=useContext(CartContext)
//  let totalCount=0
// cartItems.forEach(count => {
//   totalCount+=count.quantity
// });
    const toogleCart=()=>setIsCartOpen(!isCartOpen)
  return (
    <div onClick={toogleCart} className='cart-icon-container'>
      <img  className='cart-icon'src={CARTSVG} alt="CartIcon" />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
