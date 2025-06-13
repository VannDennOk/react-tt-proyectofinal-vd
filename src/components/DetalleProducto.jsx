import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Counter from './Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faLocationDot, faCreditCard, faRotate } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles/DetalleProducto.css'
import { CartContext } from '../context/CartContext';

const DetalleProducto = () => {

  const { productos, handleAddToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const { id } = useParams()
  const productoDetalle = productos.find(product => product.id === id)

  return (
    <section className='productDetail_main'>
      {productoDetalle ? (
        <div className='productDetail_container'>
          <div className='productDetail_img-box'>
            <img className='productDetail_img' src={productoDetalle.imgUrl} alt="imagen de producto" />
            <div className='productDetail_img-filter'></div>
          </div>

          <div className='productDetail_container-right'>
            <h2>{productoDetalle.name}</h2>
            <p>Product ID: {id}</p>
            <p className='productDetail-price'>
              {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(productoDetalle.price))}
            </p>
            <h3>Descripción</h3>
            <p>{productoDetalle.description}</p>
            <h3>Ingredientes</h3>
            <p>{productoDetalle.ingredients}</p>
            <h3>Modo de uso</h3>
            <p>{productoDetalle.use}</p>
            <div className='productDetail_btns'>
              <Counter
                stock={productoDetalle.stock}
                cantidad={cantidad}
                setCantidad={setCantidad} />
              <button className='btn-negro btn-160'
                onClick={() =>
                  handleAddToCart({ ...productoDetalle, cantidad })}>Agregar <FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
          </div>
        </div>
      ) : (
        <div className='productDetail_notfound'>
          <div className='productDetail_notfound-box'>
            <div className='productDetail_notfound-title'>
              <h2>ERROR</h2>
              <h3>PRODUCTO NO ENCONTRADO</h3>
            </div>
            <p>Lo sentimos mucho. No hemos podido encontrar el producto solicitado. Prueba volver a la sección de productos para seguir navegando.</p>
            <Link className="btn-negro btn-240" to="/productos">Volver a productos</Link>
          </div>
        </div>
      )}
      <div className='productDetail_data'>
        <div className='productDetail_data-box'>
          <FontAwesomeIcon className='icon-big' icon={faLocationDot} />
          <span className='productDetail_data-txt'>
            <h3>Retiro en tienda o envío a domicilio</h3>
            <p>Retirá sin cargo en nuestro local en CABA o elegí enviar a domicilio gratis a partir de $30.000.</p>
          </span>
        </div>
        <div className='productDetail_data-box'>
          <FontAwesomeIcon className='icon-big' icon={faCreditCard} />
          <span className='productDetail_data-txt'>
            <h3>Cuotas sin interés</h3>
            <p>Pagá con Visa o Master en 3 cuotas sin interés en compras superiores a $30.000 y en 6 cuotas sin interés en compras superiores a $70.000.</p>
          </span>
        </div>
        <div className='productDetail_data-box'>
          <FontAwesomeIcon className='icon-big' icon={faRotate} />
          <span className='productDetail_data-txt'>
            <h3>Cambios y devoluciones</h3>
            <p>Realizá cambios o devoluciones sin cargo dentro de los 30 días.</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export default DetalleProducto
