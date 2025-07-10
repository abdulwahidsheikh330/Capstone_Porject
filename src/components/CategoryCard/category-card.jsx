import React from 'react'
import './category-card.style.scss'
import { useNavigate } from 'react-router-dom'
const CategoryCard = (props) => {
    const navigate=useNavigate()
    const onNavigateHandler=()=>navigate(props.Category.route)
    return (
        <div className="category-container" onClick={onNavigateHandler}>
            <div className="background-image" style={{
                backgroundImage: `url(${props.Category.imgUrl})`
            }} />
            
            <div className="category-body-container">
                <h2>{props.Category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryCard