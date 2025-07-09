import React, { useContext } from 'react'
import './styles/ProductoDestacado.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'

const ProductDestacado = () => {
    const { productos, carga, error } = useContext(CartContext);

    if (carga) return <p>Cargando producto destacado…</p>;
    if (error) return <p>Ups, no se pudo traer el producto destacado.</p>;

    const destacado = productos.filter(
        (p) => p?.category?.toLowerCase() === 'destacado'
    );

    if (destacado.length === 0) return null;


    return (
        <section className='productDestacado_container'>
            <h2>Productos destacados</h2>
            {destacado.map((producto) => (
                <div key={producto.id} className='productDestacado_card'>
                    <div className='productDestacado_img-box'>
                        <img src={producto.imgUrl} alt={producto.name} />
                        {producto.promo && <span className='productDestacado_promo'>{producto.promo}<p>% off</p></span>}
                    </div>

                    <div className='productDestacado_info'>
                        <div className='productDestacado_text'>
                            <h3>{producto.name}</h3>
                            <p className='productDestacado_description'>{producto.description}</p>
                            <p className='productDestacado_price'>
                                {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(producto.price))}
                            </p>
                        </div>
                        <Link className='btn-negro btn-160' to={`/productos/${producto.id}`}>Ver más<FontAwesomeIcon icon={faPlus}/></Link>
                    </div>
                   
                </div>
            ))}
        </section>
    );
}

export default ProductDestacado