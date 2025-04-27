import React, { useState } from 'react';
import './App.css';
import Home from './layout/Home';

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart =(product)=>{
    setCart([...cart, product])
  }

  return (
    <>
      <Home cart={cart} handleAddToCart={handleAddToCart}></Home>
    </>
  )
}

export default App