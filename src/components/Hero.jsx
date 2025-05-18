import React from 'react';
import logoBlanco from '../assets/logoBlanco.png';
import balance from '../assets/balance.png';
import defense from '../assets/defense.png';
import sleep from '../assets/sleep.png';
import strong from '../assets/strong.png';



import heroproduct from '../assets/heroproduct.png'
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className='hero_container'>
      <div className='hero_container-textbox'>
        <img className='hero_logo' src={logoBlanco} alt='logo blanco' />
        <div className='textbox'>
          <p className='texto_blanco'><strong> Gomitas funcionales que cuidan tu bienestar todos los días.</strong></p>
          <p className='texto_blanco'>En Liv creemos que cuidarte no tiene que ser aburrido.</p>
          <p className='texto_blanco'>Combinamos sabor y ciencia para acompañarte en cada necesidad:</p>
          <div className='container_propiedades'>
            <span className='propiedades'>
              <img className='hero_icono' src={sleep} alt='logo blanco' />
              <h3 className='texto_blanco'>Descanso</h3>
            </span>
            <span className='propiedades'>
              <img className='hero_icono' src={strong} alt='logo blanco' />
              <h3 className='texto_blanco'>Fuerza</h3>
            </span>
            <span className='propiedades'>
              <img className='hero_icono' src={defense} alt='logo blanco' />
              <h3 className='texto_blanco'>Defensa</h3>
            </span>
            <span className='propiedades'>
              <img className='hero_icono' src={balance} alt='logo blanco' />
              <h3 className='texto_blanco'>Equilibrio</h3>
            </span>
          </div>
          <p className='texto_blanco'>Aptas para tu ritmo. Hechas para tu disfrute.</p>
          <p className='texto_blanco'>Sin azúcar añadida. 100% sabor.</p>
        </div>

        <Link className='hero_btn' to='/productos'>¡Descubrilas acá!</Link>

      </div>
      <img className='heroproduct' src={heroproduct} alt='imagen de producto' />
    </section>
  );
};

export default Hero;