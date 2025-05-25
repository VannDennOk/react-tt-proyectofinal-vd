import React from 'react';
import './styles/Footer.css'
import logo from '../assets/Img/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faYoutube, faCcVisa, faCcMastercard, faCcPaypal, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <footer>
      <section className='footer_container-top'>
        <div className='footer_data'>
          <h2><img className='footer_logo' src={logo} alt='logo liv' /></h2>
          <p>Gomitas divertidas que combinan ciencia y sabor para cuidarte todo el día. Sin azúcar añadida. 100% veganas.</p>
        </div>
        <div className='footer_data'>
          <h3>Envíos</h3>
          <p>Envíos expres en CABA y GBA</p>
          <p>Envíos a toda la Argentina en 72hs</p>
        </div>
        <div className='footer_data'>
          <h3>Contacto</h3>
          <span className='footer_line'><FontAwesomeIcon className='footer_icon' icon={faLocationDot} /><p>CABA, Argentina</p></span>
          <span className='footer_line'><FontAwesomeIcon className='footer_icon' icon={faEnvelope} /><p>mail@mail.com</p></span>
          <span className='footer_line'><FontAwesomeIcon className='footer_icon' icon={faWhatsapp} /><p>+54 9 11 68611033</p></span>
        </div>
        <div className='footer_data'>
          <h3>Navegación</h3>
              <Link className='footernav_link' to='/'>Inicio</Link>
              <Link className='footernav_link' to='/productos'>Productos</Link>
              <Link className='footernav_link' to='/nosotros'>Nosotros</Link>
              <Link className='footernav_link' to='/contacto'>Contacto</Link>
        </div>
        <div className='footer_data'>
          <h3>Medios de pago</h3>
          <span className='footer_line'><FontAwesomeIcon className='footer_icon' icon={faCcVisa} /><p>Visa</p></span>
          <span className='footer_line'><FontAwesomeIcon className='footer_icon' icon={faCcMastercard} /><p>Mastercard</p></span>
          <span className='footer_line'><FontAwesomeIcon className='footer_icon' icon={faCcPaypal} /> <p>PayPal</p></span>
        </div>
        <div className='footer_social'>
          <button className='footer_social-icon'><FontAwesomeIcon icon={faTiktok} /></button>
          <button className='footer_social-icon'><FontAwesomeIcon icon={faInstagram} /></button>
          <button className='footer_social-icon'><FontAwesomeIcon icon={faYoutube} /></button>
        </div>
      </section>

      <section className='footer_container-bottom'>
        <p className='txt_blanco'>© Copyright 2025 - Vanina Denegri</p>
        <p className='txt_blanco'>Proyecto Final Integrador del curso de React de Talento Tech.</p>
        <p className='txt_blanco'>Página creada con propósitos educativos y sin fines de lucro.</p>
      </section>

    </footer>
  )
}

export default Footer
