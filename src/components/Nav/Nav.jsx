import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav_container'>
      <ul className='nav_list'>
        <li><a className='nav_link' href='#'>Inicio</a></li>
        <li><a className='nav_link' href='#'>Productos</a></li>
        <li><a className='nav_link' href='#'>Nosotros</a></li>
        <li><a className='nav_link' href='#'>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Nav;