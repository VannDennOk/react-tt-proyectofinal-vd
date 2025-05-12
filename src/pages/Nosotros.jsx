import React from 'react'
import './pages.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'

const Nosotros = ({ cart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad }) => {

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
        <h1>Nosotros</h1>
        <Cart cartItems={cart} />
        <Footer />
      </main>
    </>
  )
}

export default Nosotros