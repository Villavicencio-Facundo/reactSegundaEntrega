import React from 'react'
import '../styles/style-item.css'
import { NavLink } from 'react-router-dom'

const Item = ({item}) => {
return(
    <div className='item-style'>
        <img src= {item.pictureUrl}/>
        <h2>{item.title}</h2>
        <h3> {item.description}</h3>
        <span> {item.price}</span>
        <NavLink to={`/detail/${item.id}`}>
            <button>Detail</button>
        </NavLink>
    </div>
)
}
export default Item