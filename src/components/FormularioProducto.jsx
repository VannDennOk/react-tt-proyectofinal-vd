import React, { useState, useEffect } from 'react'
import './styles/FormularioProducto.css'
import logo from '../assets/Img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const FormularioProducto = ({ onAgregar, onClose }) => {
    const [producto, setProducto] = useState({
        name: '',
        description: '',
        promo: '',
        price: '',
        stock: '',
        ingredients: '',
        use: '',
        category: '',
        imgUrl: ''
    })

    const [errors, setErrors] = useState({})

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

    //Almacena los datos
    const handleChange = (e) => {
        const { name, value } = e.target
        setProducto({ ...producto, [name]: value })
    }

    //Valida el formulario
    const validarFormulario = () => {
        const newErrors = {};
        if (!producto.name.trim()) {
            newErrors.name = 'Ingresá un nombre';
        }
        if (!producto.category.trim()) {
            newErrors.category = 'Seleccioná una categoría';
        }
        if (!producto.imgUrl.trim()) {
            newErrors.imgUrl = 'Ingresá una URL';
        }
        if (!producto.description.trim() || producto.description.length <= 10) {
            newErrors.description = 'Descripción debe tener al menos 10 caracteres';
        }

        if (!producto.promo.trim()) {
            newErrors.promo = 'Ingresá una Promo';
        }
        if (!producto.price || parseFloat(producto.price) <= 0) {
            newErrors.price = 'Precio debe ser mayor a 0';
        }
        if (!producto.stock || producto.stock <= 0) {
            newErrors.stock = 'Stock debe ser mayor a 0';
        }
        if (!producto.ingredients.trim() || producto.ingredients.length <= 10) {
            newErrors.ingredients = 'Ingredientes debe tener al menos 10 caracteres';
        }
        if (!producto.use.trim() || producto.use.length <= 10) {
            newErrors.use = 'Uso debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //Lo que hace al apretar el botón del formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validarFormulario()) {
            return;
        }
        onAgregar(producto)
        setProducto({
            name: '',
            description: '',
            promo: '',
            price: '',
            stock: '',
            ingredients: '',
            use: '',
            category: '',
            imgUrl: ''
        })
        onClose();
    }

    return (
        <div className='form-product_overlay' onClick={onClose}>
            <div className='form-product_container' onClick={(e) => e.stopPropagation()}>
                <div className='form-product_overflow'>
                    <div className='form-product_header'>
                        <img className='logo' src={logo} alt="logo" />
                        <h2>Agregar nuevo producto</h2>
                        <button className='btn_close' type='button' onClick={onClose} ><FontAwesomeIcon icon={faCircleXmark} /></button >
                    </div>
                    <p>Todos los campos son obligatorios!</p>
                    <form onSubmit={handleSubmit}>
                        <div className='from-product-box'> {/* Nombre y Categoría */}
                            <div className='form-product-line'>
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name='name'
                                    value={producto.name}
                                    onChange={handleChange}
                                    placeholder="Ingresá el nombre del producto"
                                />
                                <span className='mensajeError'>
                                    {errors.name && <p>{errors.name}</p>}
                                </span>
                            </div>

                            <div className='form-product-line'>
                                <label>Categoría</label>
                                <select
                                    name="category"
                                    value={producto.category}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccioná la categoría</option>
                                    <option value="destacado">destacado</option>
                                    <option value="no destacado">no destacado</option>
                                </select>
                                <span className='mensajeError'>
                                    {errors.category && <p>{errors.category}</p>}
                                </span>
                            </div>
                        </div>
                        <div className='form-product-line'> {/* Url */}
                            <label>URL de la imagen</label>
                            <input
                                type="url"
                                name='imgUrl'
                                value={producto.imgUrl}
                                onChange={handleChange}
                                placeholder="Ingresá la URL de la imagen"
                            />
                            <span className='mensajeError'>
                                {errors.imgUrl && <p>{errors.imgUrl}</p>}
                            </span>
                        </div>
                        <div className='form-product-line'> {/* Descripción */}
                            <label>Descripción</label>
                            <textarea
                                type="text"
                                name='description'
                                value={producto.description}
                                onChange={handleChange}
                                placeholder="Ingresá la descripción del producto (mínimo 10 caracteres)"
                                rows="4"
                                cols="50"
                            />
                            <span className='mensajeError'>
                                {errors.description && <p>{errors.description}</p>}
                            </span>
                        </div>
                        <div className='from-product-box'> {/* Promo Precio Stock */}
                            <div className='form-product-line'>
                                <label>Promo</label>
                                <select
                                    name="promo"
                                    value={producto.promo}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccioná una promo</option>
                                    <option value="25% off">25% off</option>
                                    <option value="50% off">50% off</option>
                                    <option value="2x1">2x1</option>
                                    <option value="3x2">3x2</option>
                                    <option value="">sin promo</option>
                                </select>

                                <span className='mensajeError'>
                                    {errors.promo && <p>{errors.promo}</p>}
                                </span>
                            </div>
                            <div className='form-product-line'>
                                <label>Precio</label>
                                <input
                                    type="number"
                                    name='price'
                                    value={producto.price}
                                    onChange={handleChange}
                                    min="0"
                                />
                                <span className='mensajeError'>
                                    {errors.price && <p>{errors.price}</p>}
                                </span>
                            </div >
                            <div className='form-product-line'>
                                <label>Stock</label>
                                <input
                                    type="number"
                                    name='stock'
                                    value={producto.stock}
                                    onChange={handleChange}
                                    min="0"
                                />
                                <span className='mensajeError'>
                                    {errors.stock && <p>{errors.stock}</p>}
                                </span>
                            </div>
                        </div>
                        <div className='form-product-line'> {/* Ingredientes */}
                            <label>Ingredientes</label>
                            <textarea
                                type="text"
                                name='ingredients'
                                value={producto.ingredients}
                                onChange={handleChange}
                                placeholder="Ingresá los ingredientes del producto (mínimo 10 caracteres)"
                                rows="4"
                                cols="50"
                            />
                            <span className='mensajeError'>
                                {errors.ingredients && <p>{errors.ingredients}</p>}
                            </span>
                        </div>
                        <div className='form-product-line'> {/* Uso */}
                            <label>Uso</label>
                            <textarea
                                type="text"
                                name='use'
                                value={producto.use}
                                onChange={handleChange}
                                placeholder="Ingresá las recomendaciones de uso del producto (mínimo 10 caracteres)"
                                rows="4"
                                cols="50"
                            />
                            <span className='mensajeError'>
                                {errors.use && <p>{errors.use}</p>}
                            </span>
                        </div>
                        <button className='btn-negro' type="submit">Agregar producto</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormularioProducto
