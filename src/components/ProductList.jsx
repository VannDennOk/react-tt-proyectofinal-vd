import React, { useContext } from 'react'
import './styles/ProductList.css'
import Product from './Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext'

const ProductList = () => {
    const { productos, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

    if (!productos || productos.length === 0) return null;

    return (
        <section className='productList_container'>
            <div className='productList_header'>
                <h2>Nuestros productos</h2>
                <span className='search_box'>
                    <input
                        type="text"
                        placeholder='Buscar productos'
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <FontAwesomeIcon className='search_box-icon' icon={faMagnifyingGlass} />
                </span>
            </div>

            <div className='productList_products'>
                {productosFiltrados.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductList