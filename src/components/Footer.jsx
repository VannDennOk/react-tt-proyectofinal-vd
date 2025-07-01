import React from 'react';
import './styles/Footer.css'
import logo from '../assets/Logo/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faYoutube, faCcVisa, faCcMastercard, faCcPaypal, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer>
      <section className='footer_container-top'>
        <div className='footer_data'>
          <Link to="/"><img className='logo' src={logo} alt='logo liv' /></Link>
          <p>Gomitas divertidas que combinan ciencia y sabor para cuidarte todo el día. Sin azúcar añadida. 100% veganas.</p>
        </div>
        <div className='footer_data'>
          <h3>Envíos</h3>
          <p>Envíos expres en CABA y GBA. Envíos a toda la Argentina en 72hs.</p>
        </div>
        <div className='footer_data'>
          <h3>Contacto</h3>
          <a href="https://maps.app.goo.gl/819yPqRG959KTDhXA" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-big' icon={faLocationDot} />CABA, Argentina</a>
          <a href="mailto:vann.denn@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-big' icon={faEnvelope} />vann.denn@gmail.com</a>
          <a href="https://wa.me/5491168611033" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-big' icon={faWhatsapp} />+54 9 11 68611033</a>

        </div>
        <div className='footer_data'>
          <h3>Navegación</h3>
          <ul>
            <li><NavLink className='footer-nav_link' to='/'>Inicio</NavLink></li>
            <li><NavLink className='footer-nav_link' to='/productos'>Productos</NavLink></li>
            <li><NavLink className='footer-nav_link' to='/nosotros'>Nosotros</NavLink></li>
            <li><NavLink className='footer-nav_link' to='/contacto'>Contacto</NavLink></li>
          </ul>
        </div>
        <div className='footer_data'>
          <h3>Medios de pago</h3>
          <span><FontAwesomeIcon className='icon-big' icon={faCcVisa} /><p>Visa</p></span>
          <span><FontAwesomeIcon className='icon-big' icon={faCcMastercard} /><p>Mastercard</p></span>
          <span><FontAwesomeIcon className='icon-big' icon={faCcPaypal} /><p>PayPal</p></span>
        </div>
        <div className='footer_social'>
          <button aria-label='TikTok'><FontAwesomeIcon icon={faTiktok} /></button>
          <button aria-label='Instagram'><FontAwesomeIcon icon={faInstagram} /></button>
          <button aria-label='YouTube'><FontAwesomeIcon icon={faYoutube} /></button>
        </div>
      </section>

      <section className='footer_container-bottom'>
        <p className='txt_blanco'>© Copyright Vanina Denegri 2025</p>
        <p className='txt_blanco'>Proyecto Final Integrador del curso de React de Talento Tech.</p>
        <p className='txt_blanco'>Página creada con propósitos educativos y sin fines de lucro.</p>
      </section>
    </footer>
  )
}

export default Footer