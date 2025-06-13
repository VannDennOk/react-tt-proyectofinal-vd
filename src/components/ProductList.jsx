import React, { useContext } from 'react'
import './styles/ProductList.css'
import Product from './Product'
import { CartContext } from '../context/CartContext'

const ProductList = () => {
    const { productos } = useContext(CartContext);

    if (!productos || productos.length === 0) return null;

    return (
        <section className='productList_container'>
            {productos.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </section>
    );
}

export default ProductList