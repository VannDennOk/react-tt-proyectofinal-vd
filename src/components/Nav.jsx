import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

const Nav = () => {
  return (
    <nav className='nav_container'>
      <ul className='nav_list'>
        <li><Link className='nav_link' to='/'>Inicio</Link></li>
        <li><Link className='nav_link' to='/productos'>Productos</Link></li>
        <li><Link className='nav_link' to='/nosotros'>Nosotros</Link></li>
        <li><Link className='nav_link' to='/contacto'>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;