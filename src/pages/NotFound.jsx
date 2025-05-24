import React from 'react'
import '../app.css'
import './styles/pages.css'
import { Link } from 'react-router-dom'
import notfoundimg from '../assets/notfoundimg.png'

const NotFound = () => {
  return (
    <main className='notfound_main'>
      <div className='notfound_container'>
      <div className='notfound_container-left'>
        <img className='notfound_img' src={notfoundimg} alt="gomita de osito naranja" />
      </div>
      <div className='notfound_container-right'>      
        <div className='notfound_container-right-title'>
          <h2>ERROR 404</h2>
          <h3>PÁGINA NO ENCONTRADA</h3>
        </div>
        <p>Lo sentimos mucho, no hemos podido encontrar la página que buscás. Por favor, volvé a la página de inicio.</p>
        <Link className='btn-negro btn-160' to='/'>Volver al inicio</Link>
      </div>
      </div>
    </main>
  )
}

export default NotFound