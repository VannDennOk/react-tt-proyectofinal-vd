import React, {useState} from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, addToCart }) => {

    const cambiarColor  = (e) => {
        console.log(e.target.style.color = 'var(--colorRojo')
    }

    const [cantidad, setCantidad] = useState(1)
  
    const increase = () => setCantidad(prev => (prev != product.stock ? prev + 1: prev ))
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));
    
    const estilo = {backgroundColor: product.colorPromo};

    return (
        <div className='product_card'>
            <div className='product_card-top'>
                    <button className='btn-like' onClick={cambiarColor}>
                        <FontAwesomeIcon icon={faHeart} />  
                    </button>
                <img className='product_card-img' src={product.imgUrl} alt={product.alt} />
                <p style = {estilo} className='product_card-promo'>{product.promo}</p>
            </div>        
                       
            <div className='product_card-txt'>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                <p>Stock: {product.stock}</p>
                <div className='cart_product-count'>
                      <button onClick={decrease} className='btn_count btn_radius-left'>-</button>
                      <span className='input_count'><p>{cantidad}</p></span>
                      <button onClick={increase} className='btn_count btn_radius-right'>+</button>
                    </div>
                <button className='btn_seeMore'>Ver más<FontAwesomeIcon icon={faPlus} /></button>
                <button className='btn_addToCart' onClick={()=>addToCart({...product, cantidad:cantidad})}>Agregar <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
        
        </div>
    );
};

export default Product;




