import React, { useContext } from 'react';
import './styles/Header.css'
import logo from '../assets/Logo/logo.png';
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
          <button className='link'>
            <span className='link-span'>
              <FontAwesomeIcon icon={faMagnifyingGlass} /><p1 className='link-txt'>Buscar</p1>
            </span>
          </button>

          <Link to='/login' className='link'>
            <span className='link-span'>
              <FontAwesomeIcon icon={faUser}/><p1 className='link-txt'>Login</p1>
            </span>
          </Link>

          <button className='link'>
            <span className='link-span'>
              <FontAwesomeIcon icon={faHeart} /><p1 className='link-txt'>Favs</p1>
            </span>
          </button>


          <button className='link' onClick={() => setCartOpen(true)}>
            <span className='link-span'>
              <FontAwesomeIcon icon={faCartShopping} />
              <p1 className='link-txt'>Carrito</p1>
            {totalItems > 0 && <span className='contador_carrito'>{totalItems}</span>}
            </span>
          </button>
        </div>
      

      
      
      </div>

      <Cart />
      <Nav />

    </header>
  );
};

export default Header;