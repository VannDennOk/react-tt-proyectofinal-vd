import React, { useContext, useState, useEffect } from 'react';
import './styles/Header.css'
import logo from '../assets/Logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faHeart, faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart'
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {

  const {
    cart,
    setCartOpen,
  } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('menu_overlay')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className={`menu_overlay ${isMenuOpen && 'open'}`} onClick={handleOverlayClick}></div>
      <div className='header_container'>
        <Link to='/'>
          <h1>
            <img className='logo' src={logo} alt='logo liv' />
          </h1>
        </Link>

        <div className='header_links-box'>
          <div className='header_links'>
            {/*             <button className='link'>
              <span className='link-span'>
                <FontAwesomeIcon icon={faMagnifyingGlass} /><p1 className='link-txt'>Buscar</p1>
              </span>
            </button> */}
            <Link to='/login' className='link'>
              <span className='link-span'>
                <FontAwesomeIcon icon={faUser} /><p1 className='link-txt'>Login</p1>
              </span>
            </Link>
            {/*             <button className='link'>
              <span className='link-span'>
                <FontAwesomeIcon icon={faHeart} /><p1 className='link-txt'>Favs</p1>
              </span>
            </button> */}
            <button className='link' onClick={() => setCartOpen(true)}>
              <span className='link-span'>
                <FontAwesomeIcon icon={faCartShopping} />
                <p1 className='link-txt'>Carrito</p1>
                {totalItems > 0 && <span className='contador_carrito'>{totalItems}</span>}
              </span>
            </button>
          </div>
          <button className={`menu-hamburg  ${isMenuOpen && 'ocultar'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <button className={`menu-cerrar  ${isMenuOpen && 'mostrar'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>


        </div>
      </div>
      <nav className={`nav_container ${isMenuOpen && 'open'}`}>
        <ul className='nav_list'>
          <li><NavLink className='nav_link' to='/'>Inicio</NavLink></li>
          <li><NavLink className='nav_link' to='/productos'>Productos</NavLink></li>
          <li><NavLink className='nav_link' to='/nosotros'>Nosotros</NavLink></li>
          <li><NavLink className='nav_link' to='/contacto'>Contacto</NavLink></li>
        </ul>
      </nav>
      <Cart />

    </header>
  );
};

export default Header;