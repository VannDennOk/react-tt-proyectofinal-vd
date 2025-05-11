import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>ERROR 404</h2>
      <h3>Page Not Found</h3>
      <button><Link to='/'>Volver al inicio</Link></button>
    </div>
  )
}

export default NotFound