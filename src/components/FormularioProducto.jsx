import React, { useState } from 'react'

const FormularioProducto = ({ onAgregar }) => {
    const [producto, setProducto] = useState({
        name: '',
        description: '',
        promo: '',
        price: '',
        stock: '',
        ingredients: '',
        use: '',
        category: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setProducto({ ...producto, [name]: value })
    }

    const validarFormulario = () => {
        const newErrors = {};
        if (!producto.name.trim()) {
            newErrors.name = 'Nombre es obligatorio.';
        }
        if (!producto.description.trim() || producto.description.length < 10) {
            newErrors.description = 'Descripción debe tener al menos 10 caracteres.';
        }
        if (!producto.price || producto.precio <= 0) {
            newErrors.price = 'Precio debe ser mayor a 0.';
        }
        if (!producto.stock || producto.stock <= 0) {
            newErrors.stock = 'Stock debe ser mayor a 0.';
        }
        if (!producto.ingredients.trim() || producto.ingredients.length < 10) {
            newErrors.ingredientes = 'Ingredientes debe tener al menos 10 caracteres.';
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
            category: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    name='name'
                    value={producto.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
                <label>Descripción</label>
                <input
                    type="text"
                    name='description'
                    value={producto.description}
                    onChange={handleChange}
                    required
                />
                {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
            </div>
            <div>
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
            <div>
                <label>Precio</label>
                <input
                    type="number"
                    name='price'
                    value={producto.price}
                    onChange={handleChange}
                    required
                />
                {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}
            </div>
            <div>
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

            <div>
                <label>Ingredientes</label>
                <input
                    type="text"
                    name='ingredients'
                    value={producto.ingredients}
                    onChange={handleChange}
                    required
                />
                {errors.ingredients && <p style={{ color: 'red' }}>{errors.ingredients}</p>}
            </div>

            <div>
                <label>Uso</label>
                <input
                    type="text"
                    name='use'
                    value={producto.use}
                    onChange={handleChange}
                    required
                />
                {errors.use && <p style={{ color: 'red' }}>{errors.use}</p>}
            </div>

            <div>
                <label>Categoria</label>
                <input
                    type="text"
                    name='use'
                    value={producto.category}
                    onChange={handleChange}
                    required
                />
                {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
            </div>

            <button className='btn-negro' type="submit">Agregar nuevo producto</button>
        </form>
    )
}

export default FormularioProducto
