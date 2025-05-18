import React, { useState } from 'react'
import "./styles/Counter.css"

const Counter = ({ stock, cantidad, setCantidad, productId, actualizarCantidad}) => {

    const handleChange = (newCantidad) => {
        if (actualizarCantidad && productId) {
            actualizarCantidad(productId, newCantidad)
        } else if (setCantidad) {
            setCantidad(newCantidad)
        }
    }
    
    
    const increase = () => {
        if (cantidad < stock) {

            handleChange(cantidad +1)
/*             setCantidad(cantidad + 1);
            actualizarCantidad(productId, cantidad + 1); */
        }
    }

    const decrease = () => {
        if (cantidad > 1) {

            handleChange(cantidad -1)
/*             setCantidad(cantidad - 1);
            actualizarCantidad(productId, cantidad -1); */
        }
    }

    /* const increase = () => setCantidad(prev => (prev != stock ? prev + 1: prev ))
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1)); */

    return (

        <div className='cart_product-count'>
            <button onClick={decrease} className='btn_count btn_radius-left'>-</button>
            <span className='input_count'><p>{cantidad}</p></span>
            <button onClick={increase} className='btn_count btn_radius-right'>+</button>
        </div>
    )
}

export default Counter