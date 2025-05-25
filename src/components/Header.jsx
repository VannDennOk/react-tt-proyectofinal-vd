import React from 'react';
import './styles/Header.css'
import logo from '../assets/Img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
import Cart from './Cart'
import { Link } from 'react-router-dom';

const Header = ({ vaciarCarrito, cartItems, cartCount, setCartOpen, isCartOpen, borrarProducto, actualizarCantidad }) => {

  return (
    <header>
      <div className='header_container'>
        <h1><img className='logo' src={logo} alt='logo liv' /></h1>
        <div className='header_links'>
          <button><FontAwesomeIcon icon={faMagnifyingGlass}/>Buscar</button>
          <Link to='/login'><FontAwesomeIcon icon={faUser}/>Login</Link>
          <button><FontAwesomeIcon icon={faHeart} />Favs</button>
          <button onClick={() => setCartOpen(true)}>
            <FontAwesomeIcon icon={faCartShopping} />
            Carrito{cartCount > 0 && <span className='contador_carrito'>{cartCount}</span>}
          </button>
        </div>
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