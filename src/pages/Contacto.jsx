import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Cart from "../components/Cart"
import FormContacto from "../components/FormContacto"

const Contacto = ({ cart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad }) => {

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
      <FormContacto></FormContacto>
      <Cart cartItems={cart} />
      <Footer />
    </>
  )
}

export default Contacto