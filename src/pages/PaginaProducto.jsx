import React, { useContext } from 'react';
import './styles/pages.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import DetalleProducto from '../components/DetalleProducto';
import loading from "../assets/loading.gif"
import BannerBottom from '../components/BannerBottom';
import { CartContext } from '../context/CartContext';

const PaginaProducto = () => {
  const { carga, cart} = useContext(CartContext)

  return (
    <>
      <Header />

      <main className="container_page">
        {carga ? (
          <div className='container_loading'>
            <img src={loading} alt='loading' />
            <p>Cargando información</p>
          </div> 
        ) : (
          <DetalleProducto  />
        )}

        <BannerBottom />

        <Cart/>
      </main>

      <Footer />
    </>
  )
}

export default PaginaProducto
