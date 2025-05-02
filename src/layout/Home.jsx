import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';
import { productsList } from '../utils/data';
import ProductList from '../components/ProductList/ProductList'
import Cart from '../components/Cart/Cart';
import NotFound from '../components/NotFound/NotFound';
import loading from '../assets/loading.gif'

const Home = ({ cart, handleAddToCart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen }) => {

  const [productos, setProductos] = useState([])
  const [carga, setCarga] = useState(true)
  const [error, setError] = useState(false)

  const cartCount = cart.length

  useEffect(() => {
    fetch('https://681455e4225ff1af162889a4.mockapi.io/productos-ecommerce/product')
      .then((respueta) => respueta.json())
      .then((datos) => {
        setProductos(datos)
        setCarga(false)
      })
      .catch((error) => {
        console.error('Error:', error)
        setCarga(false)
        setError(true)
      });
  }, [])

  if (error) {
    return <NotFound />
  }

  return (
    <>
      <Header 
        cartItems={cart}
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        vaciarCarrito={vaciarCarrito}
        borrarProducto={borrarProducto}
      />
      <Hero />
      <Gallery />
      {
        carga ? <img src={loading} alt='loading'/> :
        <ProductList products={productos} addToCart={handleAddToCart} />
      }
      <Cart cartItems={cart} />
      <Form />
      <Footer />
    </>
  )
}

export default Home