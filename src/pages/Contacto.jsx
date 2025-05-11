import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Cart from "../components/Cart/Cart"
import Form from "../components/Form/Form"

const Contacto = ({ cart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad }) => {
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
        <h1>Contacto</h1>
        <Form></Form>
        <Cart cartItems={cart} />
        <Footer />
    </>
  )
}

export default Contacto