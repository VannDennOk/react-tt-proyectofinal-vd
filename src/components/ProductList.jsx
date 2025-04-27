import React from 'react'
import './styles/Style.css'
import Product from './Product'


const ProductList = ({products, addToCart}) => {

    return (
        <section className='productList_container'>
            {products.map(product => (
                <Product
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </section>
    );
}

export default ProductList