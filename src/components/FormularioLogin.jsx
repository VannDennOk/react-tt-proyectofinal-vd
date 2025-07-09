import React from 'react'
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles/Formularios.css'

const FormularioLogin = () => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    error
  } = useAuth()

  return (
    <div className='login_container'>
      <Link to='/'><FontAwesomeIcon className='icon_back' icon={faArrowLeft} /></Link>
      <h2>¡Hola!</h2>
      <form onSubmit={handleSubmit}>
        <div className='form_line'>
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

        <div className='form_line'>
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
        <button className='btn-negro' type='submit'>Ingresar</button>
      </form>
    </div>
  )
}

export default FormularioLogin
