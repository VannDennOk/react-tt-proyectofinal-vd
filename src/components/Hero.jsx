import React from 'react';
import logoBlanco from '../assets/Logo/logoBlanco.png';
import equilibrio from '../assets/Icons/ico-equilibrio.png';
import defensa from '../assets/Icons/ico-defensa.png';
import descanso from '../assets/Icons/ico-descanso.png';
import fuerza from '../assets/Icons/ico-fuerza.png';
import imgHero from '../assets/Img/img-hero.png'
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
              <img src={descanso} alt='icono descanso' />
              <h3>Descanso</h3>
            </span>
            <span>
              <img src={fuerza} alt='icono Fuerza' />
              <h3>Fuerza</h3>
            </span>
            <span>
              <img src={defensa} alt='icono defensa' />
              <h3>Defensa</h3>
            </span>
            <span>
              <img src={equilibrio} alt='icono equilibrio' />
              <h3>Equilibrio</h3>
            </span>
          </div>
          <p>Aptas para tu ritmo. Hechas para tu disfrute.</p>
          <p>Sin azúcar añadida. 100% veganas.</p>
        </div>

        <Link className='btn-negro btn-240' to='/productos'>¡Descubrilas acá!</Link>

      </div>
      <img fetchPriority="high" className='heroproduct-img' src={imgHero} alt='imagen de producto' />
    </section>
  );
};

export default Hero;