import React from 'react'
import './ProductList.css'
import Product from '../Product/Product'

const ProductList = ({products, addToCart}) => {


    return (
        <section className='productList_container'>
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </section>
    );
}

export default ProductList