import React, { useContext } from 'react'
import './styles/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Counter from './Counter'
import logo from '../assets/Img/logo.png'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {

  const {
    cart,
    vaciarCarrito,
    borrarProducto,
    isCartOpen,
    setCartOpen
  } = useContext(CartContext);

  if (!isCartOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('cart_overlay')) {
      setCartOpen(false);
    }
  };

  const totalGeneral = cart
    .reduce((acc, item) => acc + item.price * item.cantidad, 0)
    .toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return (
    <div className="cart_overlay" onClick={handleOverlayClick}>
      <section className='cart_container open'>

        <div className='cart_container-title'>
          <img className='logo' src={logo} alt="logo" />
          <h2>Carrito de Compras</h2>
          <button
            onClick={() => setCartOpen(false)}
            className='btn_cart-close'>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>

        <div className='cart_table'>
          <p>Producto</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Subtotal</p>
        </div>

        <div className='cart_product-list'>
          {cart.length === 0 ? (
            <div className='cart_empty-box'>
              <span className='cart_empty-messege'><FontAwesomeIcon icon={faTriangleExclamation} /><p>El carrito está vacío</p></span>
              <Link className='btn-negro btn-240' onClick={() => setCartOpen(false)} to='/productos'>Seguir comprando</Link>
            </div>
          ) : (
            <>
              <ul className='cart_product-list'>
                {cart.map((item) => (
                  <li key={item.id} className='cart_product' >
                    <div className='cart_product-name'>
                      <div className='cart_img-box'>
                        <img className='cart_img' src={item.imgUrl} />
                      </div>
                      <p>{item.name}</p>
                    </div>
                    <p>
                      {new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS'
                      }).format(Number(item.price))}
                    </p>

                    <div className='cart_product-count'>
                      <Counter
                        stock={item.stock}
                        cantidad={item.cantidad}
                        productId={item.id}
                      />
                    </div>

                    <div className='cart_product-total'>
                      <p>
                        {(item.price * item.cantidad).toLocaleString('es-AR', {
                          style: 'currency',
                          currency: 'ARS'
                        })}
                      </p>
                      <button
                        onClick={() => borrarProducto(item)}
                        className='btn_product-delete'>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className='cart_total'>
                <p className='txt_strong'>TOTAL</p>
                <p className='txt_strong'>{totalGeneral}</p>
              </div>

              <div className='cart_btn-container'>
                <button
                  onClick={vaciarCarrito}
                  className='btn-blanco'>Vaciar Carrito
                </button>

                <Link className='btn-gris'
                  onClick={() => setCartOpen(false)}
                  to='/productos'>Seguir comprando</Link>
                <button className='btn-negro'>Ir a pagar</button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Cart