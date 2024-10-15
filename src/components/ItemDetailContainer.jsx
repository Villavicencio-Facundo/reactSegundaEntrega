import React, { useEffect, useState } from 'react'
import products from '../assets/MOCK_DATA.json'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((res) => {
            setTimeout(() => {
                res(products)
            }, 2000);
        });

        promise.then((products) => {
            const foundProduct = products.find(productToFind => productToFind.id === Number(id))
            setProduct(foundProduct)
            setLoading(false)
        });
    }, [id]);

    return loading ? 
        <h1>Loading..</h1> 
        : 
        (product ? <ItemDetail product={product} /> : <h1>Product not found</h1>)
}

export default ItemDetailContainer