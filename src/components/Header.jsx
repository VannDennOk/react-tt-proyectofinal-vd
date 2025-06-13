import React, { useContext } from 'react';
import './styles/Header.css'
import logo from '../assets/Img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
import Cart from './Cart'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {

  const {
    cart,
    setCartOpen,
  } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

  return (
    <header>
      <div className='header_container'>
        <Link to='/'>
          <h1>
            <img className='logo' src={logo} alt='logo liv' />
          </h1>
        </Link>

        <div className='header_links'>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />Buscar
          </button>

          <Link to='/login'>
            <FontAwesomeIcon icon={faUser} />Login
          </Link>

          <button><FontAwesomeIcon icon={faHeart} />Favs</button>
          <button onClick={() => setCartOpen(true)}>
            <FontAwesomeIcon icon={faCartShopping} />
            Carrito
            {totalItems > 0 && <span className='contador_carrito'>{totalItems}</span>}
          </button>
        </div>
      </div>

      <Cart />
      <Nav />

    </header>
  );
};

export default Header;