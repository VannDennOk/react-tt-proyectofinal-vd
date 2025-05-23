import React from 'react';
import './styles/pages.css'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList'
import Cart from '../components/Cart';
import loading from "../assets/loading.gif"
import BannerBottom from '../components/BannerBottom';

const Home = ({ carga, productos, cart, handleAddToCart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad }) => {

  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);

  return (
    <>
      <Header
        cartItems={cart}
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        vaciarCarrito={vaciarCarrito}
        borrarProducto={borrarProducto}
        actualizarCantidad={actualizarCantidad}
      />

      <main className="container_page">
        <Hero />
        <Gallery />
        { carga ? <div className='container_loading'><img src={loading} alt='loading' /><p>Cargando los productos</p></div> :
            <ProductList products={productos} addToCart={handleAddToCart} />}

        <BannerBottom />

        <Cart cartItems={cart} />
      </main>
      
      <Footer />
    </>
  )
}

export default Home