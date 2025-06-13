import React, { useContext } from 'react'
import './styles/pages.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import { CartContext } from '../context/CartContext'

const Nosotros = () => {

  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      <main className="container_page">
        <h1>Nosotros</h1>
        <Cart />
        <Footer />
      </main>
    </>
  )
}

export default Nosotros