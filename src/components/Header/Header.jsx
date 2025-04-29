import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Nav/Nav';

const Header = ({ countItem }) => {
  return (
    <header className='header_container'>
      <div className='header_container_top'>
        <h1>LIV</h1>
        <span className='link_icon_container'>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faMagnifyingGlass} />Buscar</a>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faUser} />Login</a>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faHeart} />Favs</a>
          <a className='link_icon' href="#"><FontAwesomeIcon icon={faCartShopping} />Carrito<span className='contador_carrito'>{countItem}</span></a>
        </span>
      </div>
      <Nav />
    </header>
  );
};

export default Header;