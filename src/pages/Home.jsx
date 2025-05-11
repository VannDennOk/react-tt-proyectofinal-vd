import React from 'react';
import loading from "../assets/loading.gif"
import './pages.css'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import ProductList from '../components/ProductList/ProductList'
import Cart from '../components/Cart/Cart';

const Home = ({ cargando, productos, cart, handleAddToCart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad }) => {

  const cartCount = cart.length

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
      <Hero />
      <Gallery />
      {
        cargando ? <div className='container_loading'><img src={loading} alt='loading' /> </div> :
          <ProductList
            products={productos}
            addToCart={handleAddToCart} />
      }
      <Cart cartItems={cart} />
      <Footer />
    </>
  )
}

export default Home