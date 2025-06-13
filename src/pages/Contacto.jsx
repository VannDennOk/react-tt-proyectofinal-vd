import React, { useContext } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Cart from "../components/Cart"
import FormContacto from "../components/FormContacto"
import { CartContext } from "../context/CartContext"

const Contacto = () => {

  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      <FormContacto />
      <Cart />
      <Footer />
    </>
  )
}

export default Contacto