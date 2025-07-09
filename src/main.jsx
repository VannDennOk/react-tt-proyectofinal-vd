import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { AdminProvider } from './context/AdminContext.jsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <AdminProvider>
          <AuthProvider>
            <App />
            <ToastContainer
              className="custom-toast-container"
              pauseOnHover={true}
              closeOnClick={true} />
          </AuthProvider>
        </AdminProvider>
      </CartProvider>
    </Router>
  </StrictMode>,
)
