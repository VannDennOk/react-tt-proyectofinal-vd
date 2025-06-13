import React, { useState, useContext } from 'react'
import "./styles/Counter.css"
import { CartContext } from '../context/CartContext';

const Counter = ({ stock, cantidad, setCantidad, productId }) => {

    const { actualizarCantidad } = useContext(CartContext);
    const [mensaje, setMensaje] = useState("");

    /** Maneja y actualiza la cantidad */
    const handleChange = (newCantidad) => {
        if (actualizarCantidad && productId) {
            actualizarCantidad(productId, newCantidad);
        } else if (setCantidad) {
            setCantidad(newCantidad);
        }
    };

    /** Mensaje de limite de stock */
    const mostrarMensajeTemporal = (texto) => {
        setMensaje(texto);
        setTimeout(() => {
            setMensaje("");
        }, 2500);
    };

    /** Incrementa la cantidad */
    const increase = () => {
        if (cantidad < stock) {
            handleChange(cantidad + 1)
            setMensaje("");
        } else {
            mostrarMensajeTemporal("Máximo de stock alcanzado")
        }
    };

    /** Descuenta la cantidad */
    const decrease = () => {
        if (cantidad > 1) {
            handleChange(cantidad - 1);
            setMensaje("");
        }
    };

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