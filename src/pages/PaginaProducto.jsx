import React from 'react'
import './pages.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import DetalleProducto from '../components/DetalleProducto';

const PaginaProducto = ({ productos, cart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad, handleAddToCart }) => {

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

      <DetalleProducto
        productos={productos}
        addToCart={handleAddToCart}
      
      ></DetalleProducto>


      <Cart cartItems={cart} />
      <Footer />
    </>
  )
}

export default PaginaProducto
