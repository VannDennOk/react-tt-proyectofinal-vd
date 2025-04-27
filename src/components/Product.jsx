import React from 'react';
import './styles/Style.css';
import ButtonLike from './ButtonLike';


const Product = ({product, addToCart }) => {

    const estilo = {backgroundColor: product.colorPromo};
    return (
        <div className='product_card'>
        
            <div className='product_card-top'>
                <ButtonLike/>
                <img className='product_card-img' src={product.imgUrl} alt={product.alt} />
                <p style = {estilo} className='product_card-promo'>{product.promo}</p>
            </div>        
                       
            <div className='product_card-txt'>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                <button onClick={()=>addToCart(product)}>Agregar</button>
            </div>
        
        </div>
    );
};

export default Product;




