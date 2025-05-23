import React from 'react'
import './styles/pages.css'
import { Link } from 'react-router-dom'
import osito404 from '../assets/osito404.png'

const NotFound = () => {
  return (
    <main className='notfound_main'>
      <div className='notfound_container'>
      <div className='notfound_container-left'>
        <img className='notfound_img' src={osito404} alt="gomita de osito naranja" />
      </div>
      <div className='notfound_container-right'>      
        <h2>ERROR 404</h2>
        <h3>PÁGINA NO ENCONTRADA</h3>
        <p>Lo sentimos mucho, no hemos podido encontrar la página que buscás. Por favor volvé a la página de inicio.</p>
        <Link className='notfound_btn' to='/'>Volver al inicio</Link>
      </div>
      </div>
    </main>
  )
}

export default NotFound