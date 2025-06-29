import React, { useContext } from 'react'
import './styles/pages.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import BannerBottom from '../components/BannerBottom'
import anatomiaOsito from '../assets/Gif/anatomiaOsito.gif'
import { CartContext } from '../context/CartContext'

const Nosotros = () => {

  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      <main className="us_container_page">
        <div className='us_frase'>
          <h2>Somos una marca enfocada en ayudarte a cuidar tu bienestar día a día de forma simple, divertida y deliciosa.</h2>
        </div>
        <div className='us_text-img'>
          <div className='us_img-box'>
            <img src="https://i.postimg.cc/YSXZ8rPz/Team.png" alt="equipo" />
          </div>
          <div className='us_text'>
            <h3>Sobre nosotros</h3>
            <p><strong>Liv®</strong> no solo es una compañía de nutrición,
              sino que conformamos un grupo humano enfocado en proveer productos
              innovadores para que puedas adquirir tus suplementos diarios de forma sencilla,
              divertida y deliciosa. <strong>¿Quién dijo que los ositos no son para adultos?</strong>
              Solo queremos que seas feliz y por eso nuestros productos están formulados
              con <strong>ingredientes naturales de calidad y sabores que podés disfrutar</strong>.</p>
            <p><strong>En el centro de todo, lideramos con corazón</strong>.
              Liv® es una iniciativa comprometida en jugar un papel fundamental en el
              apoyo de la salud de nuestro planeta como en la de nuestra comunidad local.
              Por eso tenemos la misión de desarrollar productos amigables con el medio ambiente,
              libres de crueldad animal y libres de ingredientes que limitan su consumo.
              <strong>¡Queremos que seas parte de nuestra comunidad!</strong></p>
          </div>
        </div>
        <div className='us_text-img'>
          <div className='us_text'>
            <h3>Sobre nuestros ositos</h3>
            <p>Nuestra meta es poder brindarte la mejor calidad en nuestros productos.
              Continuamete buscamos innovar en nuestras fórmulas con el fin de traerte
              los ingredientes más novedosos, pero también los más efectivos.</p>
            <p>Queremos que nuestras gomitas puedan ser consumidas sin restricciones,
              por eso <strong>nuestros productos no contienen:</strong> Gluten,
              levadura, trigo, soja, leche, lactosa, huevos, maní, azúcar, agave,
              gelatina de origen animal, colorantes sintéticos o salicilatos.</p>
          </div>
          <div className='us_img-box'>
            <img src={anatomiaOsito} alt="anatomia osito" />
          </div>
        </div>
        <div className='us_text-img'>
          <div className='us_img-box'>
            <img src="https://i.postimg.cc/MZ99f64W/boxes.png" alt="packaging" />
          </div>
          <div className='us_text'>
            <h3>Sobre nuestros envases</h3>
            <p>Todo nuestro packaging, desde los envases hasta las envolturas
              que usamos en los envíos son amigables con el medioambiente.</p>
            <p>Nuestras cajas de cartón son compostables, biodegradables y
              reciclables. Podés procesarlas en la comodidad de tu casa si
              realizás tu propio compost.</p>
            <p>Para los envases usamos CPLA (ácido poliláctico cristalizado),
              un bioplástico derivado de fuentes renovables como el almidón de maíz.
              Este material termoplástico es biodegradable y compostable.
              Pero también, es libre de sustancias químicas contaminantes y
              tóxicas (BPA-free), lo cual o hace ideal para productos de
              consumo humano y totalmente seguro para niños como para adultos
              (incluso para tus mascotas). ¡No olvides depositar estos envases
              en los contenedores de material reciclable según las regulaciones
              de tu ciudad!</p>
            <p><strong>¡En comunidad podemos hacer la diferencia!</strong></p>
          </div>
        </div>
        <div className='us_text-img'>
          <div className='us_text'>
            <h3>Sobre la producción</h3>
            <p>Nuestros gomitas se realizan en nuestros laboratorios certificados.
              Nuestras instalaciones están diseñadas para cumplir con los más altos
              estándares de calidad y seguridad, asegurando un continuo control
              durante todo el proceso de manufacturación.</p>
            <p>Nuestros productos se realizan en Argentina, con ingredientes de
              alta calidad gracias a proveedores locales.</p>
            <p>Podés confiar en que nuestros productos son testeados en todas
              las etapas del proceso de producción, con el fin de proveer los
              ositos de goma de la más alta calidad que jamás hayas probado!</p>
            <p><strong>Estamos aprobados por ANMAT</strong></p>
          </div>
          <div className='us_img-box'>
            <img src="https://i.postimg.cc/ZRCgQktt/Testing.png" alt="test" />
          </div>
        </div>
        <BannerBottom />
      </main>
      <Cart />
      <Footer />
    </>
  )
}

export default Nosotros