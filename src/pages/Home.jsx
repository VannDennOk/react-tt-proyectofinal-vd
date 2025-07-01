import React, { useContext } from 'react';
import './styles/pages.css'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import loading from "../assets/Gif/loading.gif"
import BannerBottom from '../components/BannerBottom';
import { CartContext } from '../context/CartContext';
import ProductDestacado from '../components/ProductDestacado';

const Home = () => {
  const { carga, cartCount } = useContext(CartContext)
  const totalItems = cartCount();

  return (
    <>
      <Header />

      <main className="container_page">
        <Hero />
        <Gallery />
        { carga ? (
          <div className='container_loading'>
            <img src={loading} alt='loading' />
            <p>Cargando los productos</p>
          </div>
         ) : (            
            <ProductDestacado/>
        )}

        <BannerBottom />

        <Cart />
      </main>
      
      <Footer />
    </>
  )
}

export default Home