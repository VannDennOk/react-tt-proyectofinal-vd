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
            newErrors.name = 'Debés ingresar un nombre';
        }
        if (!producto.category.trim()) {
            newErrors.category = 'Debés seleccionar una categoría';
        }
        if (!producto.imgUrl.trim()) {
            newErrors.imgUrl = 'Debés ingresar una URL';
        }
        if (!producto.description.trim() || producto.description.length <= 10) {
            newErrors.description = 'Descripción debe tener al menos 10 caracteres';
        }

        if (!producto.promo.trim()) {
            newErrors.promo = 'Debés ingresar una Promo';
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
                        <button
                            className='btn_close'
                            type='button'
                            onClick={onClose}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button >
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
                                {errors.name && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.name}</p>}
                            </div>

                            <div className='form-product-line'>
                                <label>Categoría</label>
                                <select
                                    name="category"
                                    value={producto.category}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccioná una opción</option>
                                    <option value="destacado">Destacado</option>
                                    <option value="no destacado">No destacado</option>
                                </select>
                                {errors.category && (
                                    <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.category}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-product-line'> {/* Descripción */}
                            <label>URL de la imagen</label>
                            <input
                                type="url"
                                name='imgUrl'
                                value={producto.imgUrl}
                                onChange={handleChange}
                                placeholder="Ingresá la URL de la imagen"
                            />
                            {errors.imgUrl && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.imgUrl}</p>}
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
                            {errors.description && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.description}</p>}
                        </div>
                        <div className='from-product-box'> {/* Promo Precio Stock */}
                            <div className='form-product-line'>
                                <label>Promo</label>
                                <input
                                    type="text"
                                    name='promo'
                                    value={producto.promo}
                                    onChange={handleChange}
                                />
                                {errors.promo && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.promo}</p>}
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
                                {errors.price && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.price}</p>}
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
                                {errors.stock && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.stock}</p>}
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
                            {errors.ingredients && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.ingredients}</p>}
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
                            {errors.use && <p style={{ color: 'red', fontSize: '0.75rem' }}>{errors.use}</p>}
                        </div>
                        <button className='btn-negro' type="submit">Agregar producto</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormularioProducto
