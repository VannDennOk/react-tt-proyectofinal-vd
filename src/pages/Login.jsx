import React, { useState, useContext } from 'react'
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles/Login.css'

const Login = () => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    error
  } = useAuth()

  return (
    <section className='login_main'>
      <div className='login_container'>
        <Link to='/'><FontAwesomeIcon className='icon_back' icon={faArrowLeft} /></Link>
        <h2>¡Hola!</h2>
        <form onSubmit={handleSubmit}>
          <div className='login_form-line'>
            <label htmlFor="formBasicEmail">E-mail</label>
            <input
              id='formBasicEmail'
              type="email"
              placeholder='Ingresá tu e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='mensajeError'>
              {error.email && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{error.email}</p></span>}
            </div>
          </div>

          <div className='login_form-line'>
            <label htmlFor="formBasicPassword">Contraseña</label>
            <input
              id='formBasicPassword'
              type="password"
              placeholder='Ingresá tu contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='mensajeError'>
              {error.password && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{error.password}</p></span>}
            </div>
          </div>
          <div className='login_form-btn'>
            <button className='btn-negro' type='submit'>Ingresar</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
