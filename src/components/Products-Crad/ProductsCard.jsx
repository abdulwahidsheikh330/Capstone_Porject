import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './ProductsCard.styles.scss'

import Button from '../button/button'
const ProductsCard = ({product}) => {

    const {name,price,imageUrl}=product
    const {addItemsToCart}=useContext(CartContext)
    const addProductToCart=()=>addItemsToCart(product)

    return (
        <div className='product-card-container'>
            <img className='product-card-bgImg' src={imageUrl} alt={name} />

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType="inverted">
                Add to Cart
            </Button>
        </div>
    )
}

export default ProductsCard
