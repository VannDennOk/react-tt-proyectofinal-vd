import React from 'react'
import './styles/pages.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import DetalleProducto from '../components/DetalleProducto';
import loading from "../assets/loading.gif"
import BannerBottom from '../components/BannerBottom';

const PaginaProducto = ({ carga, productos, cart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad, handleAddToCart }) => {

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
        {carga ? <div className='container_loading'><img src={loading} alt='loading' /><p>Cargando información</p></div> :
          <DetalleProducto productos={productos} addToCart={handleAddToCart} />}

        <BannerBottom />

        <Cart cartItems={cart} />
      </main>

      <Footer />
    </>
  )
}

export default PaginaProducto
