import React from 'react'
import CategoryCard from '../CategoryCard/category-card'

import './categories.style.scss'

const category = [
  {
    id: '1',
    title: "Hats",
    imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route:'shop/hats'
  },
  {
    id: '2',
    title: "Jackets",
    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route:'shop/jackets'
  },
  {
    id: '1',
    title: "Sneakers",
    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route:'shop/sneakers'
  },
  {
    id: '1',
    title: "Women",
    imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route:'shop/womens'
  },
  {
    id: '1',
    title: "Men",
    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route:'shop/mens'
  }
]

const CategoryContainer = () => {
  

  return (
    <div className="categories-container">
      {
        category.map((Category) => {
          return (
            <CategoryCard  Category={Category} />
          )
        })
      }
    </div>
  )
}

export default CategoryContainer
