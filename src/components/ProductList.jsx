import React, { useContext } from 'react'
import './styles/ProductList.css'
import Product from './Product'
import { CartContext } from '../context/CartContext'

const ProductList = () => {
    const { productos, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

    if (!productos || productos.length === 0) return null;

    console.log(busqueda);


    return (
        <section className='productList_container'>
            <input 
                type="text"
                placeholder='Buscar productos'
                value={busqueda}
                onChange={(e) => setBusqueda (e.target.value)}
            />


            {productosFiltrados.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </section>
    );
}

export default ProductList