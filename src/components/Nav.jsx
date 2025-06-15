import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Nav.css';

const Nav = () => {
  return (
    <nav className='nav_container'>
      <ul className='nav_list'>
        <li><NavLink className='nav_link' to='/'>Inicio</NavLink></li>
        <li><NavLink className='nav_link' to='/productos'>Productos</NavLink></li>
        <li><NavLink className='nav_link' to='/nosotros'>Nosotros</NavLink></li>
        <li><NavLink className='nav_link' to='/contacto'>Contacto</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;