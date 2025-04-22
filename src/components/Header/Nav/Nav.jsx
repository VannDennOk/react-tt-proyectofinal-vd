import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='nav_container'>
      <ul>
        <li><a className='link_txt' href='#'>Inicio</a></li>
        <li><a className='link_txt' href='#'>Productos</a></li>
        <li><a className='link_txt' href='#'>Nosotros</a></li>
        <li><a className='link_txt' href='#'>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Nav
