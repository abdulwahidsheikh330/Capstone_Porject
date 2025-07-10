import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../context/categoriesContext'
import ProductsCard from '../../components/Products-Crad/ProductsCard'
import './Category.styles.scss'
const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoryContext)
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <div className='Shop-Category'>
            <h2>{category.toUpperCase()}</h2>
            <div className='Category-container'>

                {
                    products && products.map((product) => {
                        return <ProductsCard key={product.id} product={product} />
                    })
                }
            </div>
        </div>
    )
}

export default Category
