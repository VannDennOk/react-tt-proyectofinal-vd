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

    //Cerrar el modal al apretar Esc
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
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
            newErrors.name = 'Nombre es obligatorio.';
        }
        if (!producto.description.trim() || producto.description.length < 10) {
            newErrors.description = 'Descripción debe tener al menos 10 caracteres.';
        }
        if (!producto.price || parseFloat(producto.price) <= 0) {
            newErrors.price = 'Precio debe ser mayor a 0.';
        }
        if (!producto.stock || producto.stock <= 0) {
            newErrors.stock = 'Stock debe ser mayor a 0.';
        }
        if (!producto.ingredients.trim() || producto.ingredients.length < 10) {
            newErrors.ingredients = 'Ingredientes debe tener al menos 10 caracteres.';
        }
        if (!producto.use.trim() || producto.use.length < 10) {
            newErrors.use = 'Uso debe tener al menos 10 caracteres.';
        }
        if (!producto.category.trim()) {
            newErrors.category = 'Categoría es obligatorio.';
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
                    <form onSubmit={handleSubmit}>
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
                                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
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
                                {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
                            </div>
                        </div>
                        <div className='form-product-line'> {/* Descripción */}
                            <label>URL de la imagen</label>
                            <input
                                type="url"
                                name='imgUrl'
                                value={producto.imgUrl}
                                onChange={handleChange}
                                required

                                placeholder="Ingresá la URL de la imagen"
                            />
                            {errors.imgUrl && <p style={{ color: 'red' }}>{errors.imgUrl}</p>}
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
                            {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
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
                                {errors.promo && <p style={{ color: 'red' }}>{errors.promo}</p>}
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
                                {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}
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
                                {errors.stock && <p style={{ color: 'red' }}>{errors.stock}</p>}
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
                            {errors.ingredients && <p style={{ color: 'red' }}>{errors.ingredients}</p>}
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
                            {errors.use && <p style={{ color: 'red' }}>{errors.use}</p>}
                        </div>
                        <button className='btn-negro' type="submit">Agregar producto</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormularioProducto
