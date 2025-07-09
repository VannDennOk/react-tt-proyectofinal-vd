import React, { useContext, useState } from 'react'
import './styles/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Counter from './Counter';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {

    const { handleAddToCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    /** cambia el color al presionar el botón de favoritos (corazón) */
    const cambiarColor = (e) => {
        console.log(e.target.style.color = 'var(--colorRojo')
    }

    return (
        <div className='product_card'>
            <div className='product_card-top'>
                <button className='btn-like' onClick={cambiarColor}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>

                <img className='product_card-img' src={product.imgUrl} alt="imagen de producto" />
                <p className='product_card-promo'>{product.promo}% off</p>
            </div>

            <div className='product_card-txt'>
                <h3>{product.name}</h3>
                <p>
                    {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(product.price))}
                </p>
                <p className='product_card-description'>{product.description}</p>
                <div className='cart_product-add'>
                    <Counter
                        stock={product.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                    />
                    <button className='btn_seeMore'><Link to={`/productos/${product.id}`}>Ver más</Link><FontAwesomeIcon icon={faPlus} /></button>
                </div>

                <button className='btn_addToCart' onClick={() => handleAddToCart({ ...product, cantidad })}>Agregar<FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
        </div>
    );
};

export default Product;




