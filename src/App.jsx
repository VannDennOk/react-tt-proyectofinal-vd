import React, { useState } from 'react';
import './App.css';
import Home from './layout/Home';

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    const productExist = cart.find(item => item.id === product.id)
    if (productExist) {
      //alert('El producto ta está en el carrito')
      setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item))
    } else {
      setCart([...cart, { ...product, cantidad: 1 }])
    }
  }

  const borrarProducto = (product) => {
    setCart(preVCart => {
      return preVCart.map(item => {
        if (item.id === product.id) {
          if (item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 }
          } else {
            return null
          }

        } else {
          return item
        }
      }).filter(item => item != null)
    })
  }

  //setCart(cart.filter(item => item.id !=product.id))

  return (
    <>
      <Home cart={cart} handleAddToCart={handleAddToCart}></Home>
    </>
  )
}

export default App