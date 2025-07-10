import React, { useContext } from 'react'
import { CategoryContext } from '../../context/categoriesContext'
import CategoryPreview from '../../components/categoryPreview/CategoryPreview'
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext)
  return (
    <div >
      {
        Object.keys(categoriesMap).map((title)=>{
          const products = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={products}/>
        })
      }

    </div>
  )
}

export default CategoriesPreview
