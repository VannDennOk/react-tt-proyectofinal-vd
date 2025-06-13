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
            isAuthenticated,
            modalAbierto,
            mensajeModal,
            setModalAbierto
  } = useContext(CartContext)

  return (
    <>
      <Router>
        {modalAbierto && (
          <Modal 
            mensaje={mensajeModal}
            onClose={() => setModalAbierto(false)}
            />
        )}
                
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
      </Router>
    </>
  )
}

export default App