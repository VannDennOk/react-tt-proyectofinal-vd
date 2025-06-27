import React, { useContext } from "react"
import './styles/pages.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Cart from "../components/Cart"
import FormularioContacto from "../components/FormularioContacto"
import { CartContext } from "../context/CartContext"

const Contacto = () => {

  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      <section className="contacto_main">
        <FormularioContacto />
      </section>
      <Cart />
      <Footer />
    </>
  )
}

export default Contacto