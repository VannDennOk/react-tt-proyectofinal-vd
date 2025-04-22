import React from 'react'
import './Header.css'
import Nav from './Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  return (
    <header className='header_container'>
      <div className='header_container_top'>
        <h1>LIV</h1>
        <span className='link_icon_container'>
        <a className='link_icon' href="#"><FontAwesomeIcon icon={faMagnifyingGlass} />Buscar</a>
        <a className='link_icon' href="#"><FontAwesomeIcon icon={faUser} />Login</a>
        <a className='link_icon' href="#"><FontAwesomeIcon icon={faHeart} />Favs</a>
        <a className='link_icon' href="#"><FontAwesomeIcon icon={faCartShopping} />Carrito</a>
        </span>
      </div>
      <Nav/>
    </header>
  )
}

export default Header
