import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="container_page">
      <h2>ERROR 404</h2>
      <h3>Page Not Found</h3>
      <button><Link to='/'>Volver al inicio</Link></button>
    </main>
  )
}

export default NotFound