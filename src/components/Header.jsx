import React from 'react';
import './styles/Header.css'
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
import Cart from './Cart'
import { Link } from 'react-router-dom';

const Header = ({ vaciarCarrito, cartItems, cartCount, setCartOpen, isCartOpen, borrarProducto, actualizarCantidad }) => {

  return (
    <header className='header_container'>
      <div className='header_container_top'>
        <h1><img className='header_logo' src={logo} alt='logo liv' /></h1>
        <span className='link_icon_container'>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faMagnifyingGlass} />Buscar</a>
          <Link to='/login'><a className='link_icon' href="#"><FontAwesomeIcon icon={faUser} />Login</a></Link>
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