import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound';
import GaleriaDeProductos from './pages/GaleriaDeProductos';
import Contacto from './pages/Contacto';

function App() {

  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(false)
  const [carga, setCarga] = useState(true)

  useEffect(() => {
    fetch('https://681455e4225ff1af162889a4.mockapi.io/productos-ecommerce/product')
      .then(respueta => respueta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos)
          setCarga(false)
        }, 2000)
      })
      .catch((error) => {
        console.error('Error:', error)
        setCarga(false)
        setError(true)
      });
  }, [])

  const [isCartOpen, setCartOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
  }, [isCartOpen]);

/*   const handleAddToCart = (product) => {
    const productExist = cart.find(item => item.id === product.id)
    if (productExist) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item))
    } else {
      setCart([...cart, product])
    }
  } */

const handleAddToCart = (product) => {
  const productExist = cart.find(item => item.id === product.id)
  if (!productExist) {
    setCart([...cart, { ...product, cantidad: product.cantidad || 1 }])
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
    setCart(cart.filter(item => item.id != product.id))
    /* setCart(preVCart => {
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
      <Router>
        <Routes>
          <Route path='/' element={<Home
            error={error}
            carga={carga}
            productos={productos}
            cart={cart}
            vaciarCarrito={vaciarCarrito}
            handleAddToCart={handleAddToCart}
            borrarProducto={borrarProducto}
            isCartOpen={isCartOpen}
            setCartOpen={setCartOpen}
            actualizarCantidad={actualizarCantidad}
          />}></Route>

          <Route path='/productos' element={<GaleriaDeProductos
            carga={carga}
            cart={cart}
            productos={productos}
            vaciarCarrito={vaciarCarrito}
            handleAddToCart={handleAddToCart}
            borrarProducto={borrarProducto}
            isCartOpen={isCartOpen}
            setCartOpen={setCartOpen}
            actualizarCantidad={actualizarCantidad}
          />}></Route>

          <Route path='/nosotros' element={<Nosotros
            error={error}
            carga={carga}
            productos={productos}
            cart={cart}
            vaciarCarrito={vaciarCarrito}
            handleAddToCart={handleAddToCart}
            borrarProducto={borrarProducto}
            isCartOpen={isCartOpen}
            setCartOpen={setCartOpen}
            actualizarCantidad={actualizarCantidad}
          />}></Route>

          <Route path='/contacto' element={<Contacto
            error={error}
            carga={carga}
            productos={productos}
            cart={cart}
            vaciarCarrito={vaciarCarrito}
            handleAddToCart={handleAddToCart}
            borrarProducto={borrarProducto}
            isCartOpen={isCartOpen}
            setCartOpen={setCartOpen}
            actualizarCantidad={actualizarCantidad}
          />}></Route>

          <Route path='*' element={<NotFound
          />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App