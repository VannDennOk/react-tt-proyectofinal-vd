import React from 'react';
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';
import { productsList } from '../utils/data';
import ProductList from '../components/ProductList/ProductList'
import Cart from '../components/Cart/Cart';

const Home = ({cart, handleAddToCart}) => {
  const countItem = cart.length
  return (
    <>
      <Header countItem={countItem}/>
        <Hero/>
        <Gallery/>
        <ProductList products={productsList} addToCart={handleAddToCart}/>
        <Cart cartItems={cart}/>
        <Form/>
      <Footer/>
    </>
  )
}

export default Home
