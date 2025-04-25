import React from 'react';
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import TarjetaProductos from '../components/TarjetaProductos/TarjetaProductos';
import Footer from '../components/Footer/Footer';
import Contador from '../components/Contador/contador';
import Formulario from '../components/Formulario/Formulario';
import { productos } from '../utils/data';


const Home = () => {
  
    const mostrarMensaje  = (e) => {
      console.log(e.target.style.backgroundColor = 'red')
  }

  return (
    <>
      <Header/>
      <Hero/>
      <Gallery/>
      <section className='tarjeta__container'>
        {productos.map((producto) =>
          <TarjetaProductos
            key={producto.id}
            titulo={producto.titulo}
            img={producto.imagenUrl}
            alt={producto.alt}
            descripcion={producto.descripcion}
            promocion={producto.promocion}
            botonTexto="Ver más"
          ></TarjetaProductos>
        )}
      </section>
      <Formulario/>
      <Footer/>
      <button onClick={mostrarMensaje}>Mensaje</button>
      <Contador/>
    </>
  )
}

export default Home
