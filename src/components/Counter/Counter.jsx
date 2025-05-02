import React, {useState} from 'react'
import "./Counter.css"

const Counter = ({ stock, cantidad, setCantidad }) => {

    const increase = () => setCantidad(prev => (prev != stock ? prev + 1: prev ))
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    return (

        <div className='cart_product-count'>
            <button onClick={decrease} className='btn_count btn_radius-left'>-</button>
            <span className='input_count'><p>{cantidad}</p></span>
            <button onClick={increase} className='btn_count btn_radius-right'>+</button>
        </div>
    )
}

export default Counter
