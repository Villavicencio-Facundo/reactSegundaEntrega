import React, { useEffect, useState } from 'react'
import mockProducts from '../assets/MOCK_DATA.json'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) // Iniciar en true
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true) // Reiniciar a true al cambiar de categoría
        const promise = new Promise((res) => {
            setTimeout(() => {
                res(mockProducts)
            }, 2000)
        })
        promise.then((products) => {
            let productsFiltered
            if (categoryId) {
                productsFiltered = products.filter(f => f.categoryId === categoryId)
            } else {
                productsFiltered = mockProducts
            }
            setProducts(productsFiltered)
            setLoading(false) // Cambiar a false después de cargar los datos
        })
    }, [categoryId])

    return loading ? 
        <h1>Loading..</h1> 
        : 
        <ItemList products={products}/>
}
export default ItemListContainer