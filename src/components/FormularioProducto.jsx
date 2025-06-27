import React, { useState, useEffect } from 'react'
import './styles/Formularios.css'
import logo from '../assets/Img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleInfo, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

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
            newErrors.promo = 'Seleccioná una promo';
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
        <div className='form_overlay' onClick={onClose}>
            <div className='form_container' onClick={(e) => e.stopPropagation()}>
                <div className='form_overflow'>
                    <div className='form_header'>
                        <img className='logo' src={logo} alt="logo" />
                        <h2>Agregar nuevo producto</h2>
                        <button className='btn_close' type='button' onClick={onClose} ><FontAwesomeIcon icon={faCircleXmark} /></button >
                    </div>
                    <span className='form_header-mensaje'><FontAwesomeIcon icon={faCircleInfo} /><p>Todos los campos son obligatorios!</p></span>
                    <form onSubmit={handleSubmit}>
                        <div className='from_box'> {/* Nombre y Categoría */}
                            <div className='form_line'>
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name='name'
                                    value={producto.name}
                                    onChange={handleChange}
                                    placeholder="Ingresá el nombre del producto"
                                />
                                <div className='mensajeError'>
                                    {errors.name && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.name}</p></span>}
                                </div>
                            </div>
                            <div className='form_line'>
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
                                <div className='mensajeError'>
                                    {errors.category && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.category}</p></span>}
                                </div>
                            </div>
                        </div>
                        <div className='form_line'> {/* Url */}
                            <label>URL de la imagen</label>
                            <input
                                type="url"
                                name='imgUrl'
                                value={producto.imgUrl}
                                onChange={handleChange}
                                placeholder="Ingresá la URL de la imagen"
                            />
                            <div className='mensajeError'>
                                {errors.imgUrl && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.imgUrl}</p></span>}
                            </div>
                        </div>
                        <div className='form_line'> {/* Descripción */}
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
                            <div className='mensajeError'>
                                {errors.description && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.description}</p></span>}
                            </div>
                        </div>
                        <div className='from_box'> {/* Promo Precio Stock */}
                            <div className='form_line'>
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
                                <div className='mensajeError'>
                                    {errors.promo && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.promo}</p></span>}
                                </div>
                            </div>
                            <div className='form_line'>
                                <label>Precio</label>
                                <input
                                    type="number"
                                    name='price'
                                    value={producto.price}
                                    onChange={handleChange}
                                    min="0"
                                />
                                <div className='mensajeError'>
                                    {errors.price && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.price}</p></span>}
                                </div>
                            </div >
                            <div className='form_line'>
                                <label>Stock</label>
                                <input
                                    type="number"
                                    name='stock'
                                    value={producto.stock}
                                    onChange={handleChange}
                                    min="0"
                                />
                                <div className='mensajeError'>
                                    {errors.stock && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.stock}</p></span>}
                                </div>
                            </div>
                        </div>
                        <div className='form_line'> {/* Ingredientes */}
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
                            <div className='mensajeError'>
                                {errors.ingredients && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.ingredients}</p></span>}
                            </div>
                        </div>
                        <div className='form_line'> {/* Uso */}
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
                            <div className='mensajeError'>
                                {errors.use && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.use}</p></span>}
                            </div>
                        </div>
                        <button className='btn-negro' type="submit">Agregar producto</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormularioProducto
