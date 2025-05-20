import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import crueltyFree from '../assets/crueltyFree.png'
import libreAzucar from '../assets/libreAzucar.png'
import libreGluten from '../assets/libreGluten.png'
import vegano from '../assets/vegano.png'
import Counter from './Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './styles/DetalleProducto.css'

const DetalleProducto = ({ productos, addToCart }) => {

  const [cantidad, setCantidad] = useState(1);

  console.log(productos);
  const { id } = useParams()
  const productoDetalle = productos.find(product => product.id === id)

  return (
    <>

      {productoDetalle ? (

        <section className='container_productDetail'>
          <div className='container_productDetail-top'>
            <div className='productDetail_img-box'>
              <img className='productDetail_img' src={productoDetalle.imgUrl} alt="imagen de producto" />
              <div className='productDetail_img-filter'></div>
            </div>
            <div className='container_productDetail-right'>
              <h1 className='productDetail-title'>{productoDetalle.name}</h1>
              <p className='productDetail-txt'>Product ID: {id}</p>
              <p className='productDetail-price'>
                {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(productoDetalle.price))}
              </p>
              <h3 className='productDetail-subtitle'>Descripción</h3>
              <p>{productoDetalle.description}</p>
              <h3 className='productDetail-subtitle'>Ingredientes</h3>
              <p>{productoDetalle.ingredients}</p>
              <h3 className='productDetail-subtitle'>Modo de uso</h3>
              <p>{productoDetalle.use}</p>
              <div className='container_productDetail-btn'>
                <Counter stock={productoDetalle.stock} cantidad={cantidad} setCantidad={setCantidad} />
                <button className='productDetail_btn-add' onClick={() => addToCart({ ...productoDetalle, cantidad: cantidad })}>Agregar <FontAwesomeIcon icon={faCartPlus} /></button>
              </div>
            </div>
          </div>
          <div className='container_productDetail-banner'>
            <h1><img className='banner_img' src={crueltyFree} alt='cruelty free' /></h1>
            <h1><img className='banner_img' src={vegano} alt='vegano' /></h1>
            <h1><img className='banner_img' src={libreGluten} alt='libre de gluten' /></h1>
            <h1><img className='banner_img' src={libreAzucar} alt='libre de azucar' /></h1>
          </div>
        </section>

      ) : (<p>Producto no encontrado</p>)}
    </>
  )
}

export default DetalleProducto
