import React, {useEffect} from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cartItems, vaciarCarrito, borrarProducto, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('cart_overlay')) {
      onClose();
    }
  };

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
        <p>Total</p>
      </div>

      <div className='cart_product-list'>
        {cartItems.length === 0 ? (
          <span className='cart_empty'><FontAwesomeIcon icon={faTriangleExclamation} /><p>El carrito está vacío</p></span>
        ) : (
          <>
            <ul>
              {cartItems.map((item ) => (
                                  <li key={item.id} className='cart_product' >
                    <div className='cart_product-name'>
                      <img className='cart_img' src={item.imgUrl}></img>
                      <p>{item.name}</p>
                    </div>
                    <p>${item.price}</p>
                    <div className='cart_product-count'>
                      <button className='btn_count btn_radius-left'>-</button>
                      <span className='input_count'><p>{item.cantidad}</p></span>
                      <button className='btn_count btn_radius-right'>+</button>
                    </div>
                    <div className='cart_product-total'>
                      <p>${item.price * item.cantidad}</p>
                      <button onClick={() => borrarProducto(item)} className='btn_product-delete'><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                  </li>
              ))}
            </ul>
            <div className='cart_total'>
              <p className='txt_strong'>TOTAL</p>
              <p className='txt_strong'>$ 000.000</p>
            </div>
            <button onClick={() => vaciarCarrito()} className='btn_pay'>Vaciar Carrito</button>
            <button className='btn_pay'>Ir a pagar</button>
          </>
        )}
      </div>
    </section>
    </div>
  )
}

export default Cart