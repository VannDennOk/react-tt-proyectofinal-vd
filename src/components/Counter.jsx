import React, { useState } from 'react'
import "./styles/Counter.css"

const Counter = ({ stock, cantidad, setCantidad, productId, actualizarCantidad }) => {

    const [mensaje, setMensaje] = useState("");

    const handleChange = (newCantidad) => {
        if (actualizarCantidad && productId) {
            actualizarCantidad(productId, newCantidad);
        } else if (setCantidad) {
            setCantidad(newCantidad);
        }
    };

    const mostrarMensajeTemporal = (texto) => {
        setMensaje(texto);
        setTimeout(() => {
            setMensaje("");
        }, 2500);
    };

    const increase = () => {
        if (cantidad < stock) {
            handleChange(cantidad + 1)
            setMensaje("");
            /* setCantidad(cantidad + 1);
            actualizarCantidad(productId, cantidad + 1); */
        } else {
            mostrarMensajeTemporal("Máximo de stock alcanzado")
        }
    };

    const decrease = () => {
        if (cantidad > 1) {
            handleChange(cantidad - 1);
            setMensaje("");
            /* setCantidad(cantidad - 1);
            actualizarCantidad(productId, cantidad -1); */
        }
    };

    /* const increase = () => setCantidad(prev => (prev != stock ? prev + 1: prev ))
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1)); */

    return (

        <div className='product_counter'>
            <button onClick={decrease} className='btn-counter btn-radius-left'>-</button>
            <span className='input_counter'><p>{cantidad}</p></span>
            <button onClick={increase} className='btn-counter btn-radius-right'>+</button>
            {mensaje && <p className='mensaje_stock'>{mensaje}</p>}
        </div>
    )
}

export default Counter