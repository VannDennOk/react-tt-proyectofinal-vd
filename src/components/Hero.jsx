import React from 'react';
import logoBlanco from '../assets/logoBlanco.png';
import balance from '../assets/balance.png';
import defense from '../assets/defense.png';
import sleep from '../assets/sleep.png';
import strong from '../assets/strong.png';
import heroproduct from '../assets/Img/heroproduct.png'
import { Link } from 'react-router-dom';
import './styles/Hero.css';

function Hero() {
  return (
    <section className='hero_container'>
      <div className='hero_container-textbox'>
        <img className='logo' src={logoBlanco} alt='logo blanco' />
        <div className='textbox'>
          <p><strong> Gomitas funcionales que cuidan tu bienestar todos los días.</strong></p>
          <p>En Liv creemos que cuidarte no tiene que ser aburrido.</p>
          <p>Combinamos sabor y ciencia para acompañarte en cada necesidad:</p>
          <div className='container_propiedades'>
            <span>
              <img src={sleep} alt='icono descanso' />
              <h3>Descanso</h3>
            </span>
            <span>
              <img src={strong} alt='icono Fuerza' />
              <h3>Fuerza</h3>
            </span>
            <span>
              <img src={defense} alt='icono defensa' />
              <h3>Defensa</h3>
            </span>
            <span>
              <img src={balance} alt='icono equilibrio' />
              <h3>Equilibrio</h3>
            </span>
          </div>
          <p>Aptas para tu ritmo. Hechas para tu disfrute.</p>
          <p>Sin azúcar añadida. 100% veganas.</p>
        </div>

        <Link className='btn-negro btn-240' to='/productos'>¡Descubrilas acá!</Link>

      </div>
      <img className='heroproduct-img' src={heroproduct} alt='imagen de producto' />
    </section>
  );
};

export default Hero;