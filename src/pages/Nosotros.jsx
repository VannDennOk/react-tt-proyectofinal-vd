import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'

const Nosotros =({ cart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad}) => { 
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
        <h1>Nosotros</h1>
        <Cart cartItems={cart} />
        <Footer />
      </>
    )
  }

export default Nosotros