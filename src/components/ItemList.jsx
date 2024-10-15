import React from 'react'
import Item from  './Item'
import '../styles/style-itemList.css'

const ItemList = ({products}) => {
    return (
        <div className='item-list-style'>
            {products.map(products => {
          return (
            <Item item={products} key ={products.id}/>
          )
        })}
        </div>
    )
}

export default ItemList