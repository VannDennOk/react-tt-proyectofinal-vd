import { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound';
import GaleriaDeProductos from './pages/GaleriaDeProductos';
import Contacto from './pages/Contacto';
import Modal from './components/Modal';
import Admin from './pages/Admin';
import Login from './pages/Login';
import RutasProtegidas from './auth/RutasProtegidas';
import { CartContext } from './context/CartContext';
import PaginaProducto from './pages/PaginaProducto';

function App() {
  const {   
            cart, 
            productos, 
            error, 
            carga,
            isAuthenticated,
            vaciarCarrito,
            handleAddToCart,
            borrarProducto,
            isCartOpen,
            setCartOpen,
            actualizarCantidad,
            cartCount,
            modalAbierto,
            mensajeModal1,
            mensajeModal2,
            setModalAbierto
  } = useContext(CartContext)

  return (
    <>
      <Router>
        {modalAbierto && <Modal mensaje1={mensajeModal1} mensaje2={mensajeModal2} onClose={() => setModalAbierto(false)} />}
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
            cartItems={cart}
            cartCount={cartCount}
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

          <Route path='/productos/:id' element={<PaginaProducto
            productos={productos}

            error={error}
            carga={carga}
            cart={cart}
            vaciarCarrito={vaciarCarrito}
            handleAddToCart={handleAddToCart}
            borrarProducto={borrarProducto}
            isCartOpen={isCartOpen}
            setCartOpen={setCartOpen}
            actualizarCantidad={actualizarCantidad}
            cartItems={cart}
            cartCount={cartCount}
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

          <Route path='/admin' element={<RutasProtegidas isAuthenticated=
            {isAuthenticated}> <Admin /></RutasProtegidas>} />

          <Route path='/login' element={<Login />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>
    </>
  )
}

export default App