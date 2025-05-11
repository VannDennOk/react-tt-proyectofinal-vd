import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Button from '../Button/Button';

function Hero() {
  return (
    <section className='hero_container'>
      <div className='hero_container-textbox'>
        <h2>LIV</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quaerat, obcaecati doloribus blanditiis iusto repellendus totam libero ad aliquid et consectetur, autem assumenda! Libero, iure! Adipisci molestiae provident doloribus porro?</p>
      <Link className='hero_btn' to='/productos'>Comprar</Link>
        
      </div>
      <div className='hero_container-img'></div>
    </section>
  );
};

export default Hero;