import React, { useState } from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Counter from '../Counter/Counter';

const Product = ({ product, addToCart }) => {

    const [cantidad, setCantidad] = useState(1);

    const cambiarColor = (e) => {
        console.log(e.target.style.color = 'var(--colorRojo')
    }

    const estiloImg = {
        backgroundImage: `url(${product.imgUrl})`,

    };

    return (
        <div className='product_card'>
            <div className='product_card-top'>
                <button className='btn-like' onClick={cambiarColor}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <div className='product_card-img-filter'></div>
                <div style={estiloImg} className='product_card-img'></div>
                <p className='product_card-promo'>{product.promo}</p>
            </div>

            <div className='product_card-txt'>
                <h3>{product.name}</h3>
                <p>$ {product.price}</p>
                <p className='product_card-description'>{product.description}</p>
                <div className='cart_product-add'>
                    <Counter stock={product.stock} cantidad={cantidad} setCantidad={setCantidad} />
                    <button className='btn_addToCart' onClick={() => addToCart({ ...product, cantidad: cantidad })}>Agregar <FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
                <button className='btn_seeMore'>Ver más<FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Product;




