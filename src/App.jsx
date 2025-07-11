import { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound';
import GaleriaDeProductos from './pages/GaleriaDeProductos';
import Contacto from './pages/Contacto';
import Admin from './pages/Admin';
import Login from './pages/Login';
import RutasProtegidas from './rutas/RutasProtegidas';
import PaginaProducto from './pages/PaginaProducto';
import ScrollToTop from './components/ScrollToTop';

import { CartContext } from './context/CartContext';


function App() {
  const {
    isAuthenticated,
  } = useContext(CartContext)

  return (
    <>
      <h1 className="sr-only">Cargando Liv...</h1>

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/productos' element={<GaleriaDeProductos />}></Route>

        <Route path='/productos/:id' element={<PaginaProducto />}></Route>

        <Route path='/nosotros' element={<Nosotros />}></Route>

        <Route path='/contacto' element={<Contacto />}></Route>

        <Route path='/admin' element={<RutasProtegidas isAuthenticated=
          {isAuthenticated}> <Admin /></RutasProtegidas>} />

        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App