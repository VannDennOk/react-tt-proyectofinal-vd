import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav/Nav';
import Cart from '../Cart/Cart'

const Header = ({ vaciarCarrito, cartItems, cartCount, setCartOpen, isCartOpen, borrarProducto, actualizarCantidad }) => {
  
  return (
    <header className='header_container'>
      <div className='header_container_top'>
        <h1>LIV</h1>
        <span className='link_icon_container'>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faMagnifyingGlass} />Buscar</a>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faUser} />Login</a>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faHeart} />Favs</a>
          <a className='link_icon' href="#" onClick={() => setCartOpen(true)}>
            <FontAwesomeIcon icon={faCartShopping} />
            Carrito{cartCount > 0 && <span className='contador_carrito'>{cartCount}</span>}
          </a>
        </span>
      </div>
      <Cart
        vaciarCarrito={vaciarCarrito}
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        borrarProducto={borrarProducto}
        actualizarCantidad={actualizarCantidad} />
      <Nav />
    </header>
  );
};

export default Header;