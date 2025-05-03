import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './layout/Home';

function App() {

  const [cart, setCart] = useState([])
  console.log(cart)

  const [isCartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
  }, [isCartOpen]);

  const handleAddToCart = (product) => {
    const productExist = cart.find(item => item.id === product.id)

    if (productExist) {
      //alert('El producto ta está en el carrito')
      setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item))
    } else {
      setCart([...cart, product])
    }
  }

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  const borrarProducto = (product) => {

    setCart(cart.filter(item => item.id !=product.id))

/*     setCart(preVCart => {
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
    }) */
  }
  
  const vaciarCarrito = () => {
    setCart([])
  }

  return (
    <>
      <Home
        cart={cart}
        vaciarCarrito={vaciarCarrito}
        handleAddToCart={handleAddToCart}
        borrarProducto={borrarProducto}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        actualizarCantidad={actualizarCantidad}
      />
    </>
  )
}

export default App