import React, { useState, useEffect } from 'react'
import './styles/FormularioProducto.css'
import logo from '../assets/Img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const FormularioEdicion = ({ productoSeleccionado, onActualizar, onClose }) => {
    const [producto, setProducto] = useState(productoSeleccionado);


    //cerrar con esc, bloquear scroll, limpiar al cerrar
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);





    useEffect(() => {
        setProducto(productoSeleccionado)
    }, [productoSeleccionado])

    //Almacena los datos
    const handleChange = (e) => {
        const { name, value } = e.target
        setProducto({ ...producto, [name]: value })
    }

    return (
        <div className='form-product_overlay' onClick={onClose}>
            <div className='form-product_container' onClick={(e) => e.stopPropagation()}>
                <div className='form-product_overflow'>
                    <div className='form-product_header'>
                        <img className='logo' src={logo} alt="logo" />
                        <h2>Editar producto</h2>
                        <button
                            className='btn_close'
                            type='button'
                            onClick={onClose}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button >
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        onActualizar(producto)
                    }}>
                        <div className='from-product-box'> {/* Nombre y Categoría */}
                            <div className='form-product-line'>
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name='name'
                                    value={producto.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ingresá el nombre del producto"
                                />
                            </div>
                            <div className='form-product-line'>
                                <label>Categoría</label>
                                <input
                                    type="text"
                                    name='category'
                                    value={producto.category}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ingresá la categoría del producto"
                                />

                            </div>
                        </div>
                        <div className='form-product-line'> {/* URL */}
                            <label>URL de la imagen</label>
                            <input
                                type="url"
                                name='imgUrl'
                                value={producto.imgUrl}
                                onChange={handleChange}
                                required

                                placeholder="Ingresá la URL de la imagen"
                            />
                        </div>

                        <div className='form-product-line'> {/* Descripción */}
                            <label>Descripción</label>
                            <textarea
                                type="text"
                                name='description'
                                value={producto.description}
                                onChange={handleChange}
                                required

                                placeholder="Ingresá la descripción del producto"
                                rows="4"
                                cols="50"
                            />
                        </div>
                        <div className='from-product-box'> {/* Promo Precio Stock */}
                            <div className='form-product-line'>
                                <label>Promo</label>
                                <input
                                    type="text"
                                    name='promo'
                                    value={producto.promo}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className='form-product-line'>
                                <label>Precio</label>
                                <input
                                    type="number"
                                    name='price'
                                    value={producto.price}
                                    onChange={handleChange}
                                    required
                                />

                            </div >
                            <div className='form-product-line'>
                                <label>Stock</label>
                                <input
                                    type="number"
                                    name='stock'
                                    value={producto.stock}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                        </div>
                        <div className='form-product-line'> {/* Ingredientes */}
                            <label>Ingredientes</label>
                            <textarea
                                type="text"
                                name='ingredients'
                                value={producto.ingredients}
                                onChange={handleChange}
                                required

                                placeholder="Ingresá los ingredientes del producto"
                                rows="4"
                                cols="50"
                            />

                        </div>
                        <div className='form-product-line'> {/* Uso */}
                            <label>Uso</label>
                            <textarea
                                type="text"
                                name='use'
                                value={producto.use}
                                onChange={handleChange}
                                required
                                placeholder="Ingresá las recomendaciones de uso del producto"
                                rows="4"
                                cols="50"
                            />
                        </div>
                        <button className='btn-negro' type="submit">Editar producto</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormularioEdicion
