import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faYoutube, faCcVisa, faCcMastercard, faCcPaypal, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <span>
          <p>© Copyright 2025 - Vanina Denegri</p>
        </span>
      </section>
      <section>
        <div>
          <p>Navegación</p>
          <a href='#'>Inicio</a>
          <a href='#'>Nosotros</a>
          <a href='#'>Contacto</a>
        </div>
        <div>
          <p>Medios de pago</p>
          <span><FontAwesomeIcon icon={faCcVisa} /><p>Visa</p></span>
          <span><FontAwesomeIcon icon={faCcMastercard} /><p>Mastercard</p></span>
          <span><FontAwesomeIcon icon={faCcPaypal} /> <p>PayPal</p></span>
        </div>
        <div>
          <p>Contacto</p>
          <span><FontAwesomeIcon icon={faEnvelope} /><p>mail@mail.com</p></span>
          <span><FontAwesomeIcon icon={faLocationDot} /><p>Dirección, 1234 - CABA, Argentina</p></span>
          <span><FontAwesomeIcon icon={faWhatsapp} /><p>+54 9 11 68611033</p></span>
        </div>
      </section>


      <p>Proyecto Final Integrador del curso de React de Talento Tech.</p>
      <p>Página creada con propósitos educativos y sin fines de lucro.</p>
    </footer>
  )
}

export default Footer
