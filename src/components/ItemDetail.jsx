import React from 'react'

const ItemDetail = ({ product }) => {
    return (
        <div>
            <img src={product.pictureUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <span>{product.price}</span>
        </div>
    );
}

export default ItemDetail
