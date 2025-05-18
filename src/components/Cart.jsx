import React, { useState, useEffect } from 'react'
import './styles/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Counter from './Counter'



const Cart = ({ cartItems, vaciarCarrito, borrarProducto, isOpen, onClose, actualizarCantidad }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('cart_overlay')) {
      onClose();
    }
  };

  const totalGeneral = cartItems
    .reduce((acc, item) => acc + item.price * item.cantidad, 0)
    .toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });


  return (
    <div className="cart_overlay" onClick={handleOverlayClick}>
      <section className={`cart_container ${isOpen ? 'open' : ''}`}>
        <div className='cart_container-title'>
          <h2>LIV</h2>
          <h3>Carrito de Compras</h3>
          <button onClick={onClose} className='btn_cart-close'><FontAwesomeIcon icon={faCircleXmark} /></button>
        </div>
        <div className='cart_table'>
          <p>Producto</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Subtotal</p>
        </div>

        <div className='cart_product-list'>
          {cartItems.length === 0 ? (
            <span className='cart_empty'><FontAwesomeIcon icon={faTriangleExclamation} /><p>El carrito está vacío</p></span>
          ) : (
            <>
              <ul className='cart_product-list'>
                {cartItems.map((item) => (
                  <li key={item.id} className='cart_product' >
                    <div className='cart_product-name'>
                      <img className='cart_img' src={item.imgUrl}></img>
                      <p>{item.name}</p>
                    </div>
                    <p>
                      {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(item.price))}
                    </p>
                    <div className='cart_product-count'>
                      <Counter
                        stock={item.stock}
                        cantidad={item.cantidad}
                        productId={item.id}
                        actualizarCantidad={actualizarCantidad}
/*                         setCantidad={(nuevaCantidad) => actualizarCantidad(item.id, nuevaCantidad)}  */
                        />
                    </div>
                    <div className='cart_product-total'>
                      <p>{(item.price * item.cantidad).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                      <button onClick={() => borrarProducto(item)} className='btn_product-delete'><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className='cart_total'>
                <p className='txt_strong'>TOTAL</p>
                <p className='txt_strong'>{totalGeneral}</p>
              </div>
              <div className='cart_btn-container'>
                <button onClick={() => vaciarCarrito()} className='btn_empty'>Vaciar Carrito</button>
                <button className='btn_pay'>Ir a pagar</button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Cart