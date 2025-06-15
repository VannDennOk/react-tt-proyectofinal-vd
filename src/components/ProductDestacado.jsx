import React, { useContext } from 'react'
import './styles/ProductList.css'
import { CartContext } from '../context/CartContext'

const ProductDestacado = () => {
    const { productos, carga, error, handleAddToCart } = useContext(CartContext);

    if (carga) return <p>Cargando producto destacado…</p>;
    if (error) return <p>Ups, no se pudo traer el producto destacado.</p>;

    const destacado = productos.filter(
        (p) => p?.category?.toLowerCase() === 'destacado'
    );

    if (destacado.length === 0) return null;


    return (
        <section className='productList_container'>
            <h2>Productos destacados</h2>
            {destacado.map((producto) => (
            <div className='productDestacado_container'>

                <img src={producto.imgUrl} alt={producto.name} className='product-img' width={200} />

                <div className='product-info'>
                    <h3 className='product-name'>{producto.name}</h3>
                    {producto.promo && <span className='product-promo'>{producto.promo}</span>}
                    <p className='product-price'>$ {producto.price}</p>
                </div>


                <button
                    className='btn-agregar'
                    onClick={() => handleAddToCart(producto)}
                >
                    Agregar al carrito
                </button>
            </div>

            ))}
        </section>
    );
}

export default ProductDestacado