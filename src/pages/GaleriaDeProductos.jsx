import React, { useContext } from 'react';
import './styles/pages.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import loading from "../assets/loading.gif"
import Cart from "../components/Cart"
import BannerBottom from "../components/BannerBottom"
import { CartContext } from "../context/CartContext"

const GaleriaDeProductos = () => {

  const { carga } = useContext(CartContext);

  return (
    <>
      <Header />

      <main className="container_page">
        {carga ? (
          <div className='container_loading'>
            <img src={loading} alt='loading' />
            <p>Cargando los productos</p>
          </div>
        ) : (
          <ProductList />
        )}
        <BannerBottom />
        <Cart />
      </main>

      <Footer />
    </>
  )
}

export default GaleriaDeProductos