import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav/Nav';
import Cart from '../Cart/Cart'

const Header = ({ cartCount, cartItems, vaciarCarrito, borrarProducto, isCartOpen, setCartOpen }) => {
  return (
    <header className='header_container'>
      <div className='header_container_top'>
        <h1>LIV</h1>
        <span className='link_icon_container'>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faMagnifyingGlass} />Buscar</a>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faUser} />Login</a>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faHeart} />Favs</a>
          <button onClick={() => setCartOpen(true)}> Abrir Carrito </button>
          <Cart 
            vaciarCarrito={vaciarCarrito}
            cartItems={cartItems} 
            isOpen={isCartOpen}
            onClose={() => setCartOpen(false)} borrarProducto={borrarProducto}
          />       
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faCartShopping} />Carrito<span className='contador_carrito'>{cartCount}</span></a>
        </span>
      </div>
      <Nav />
    </header>
  );
};

export default Header;