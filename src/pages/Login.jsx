import React, { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles/Login.css'

const Login = () => {

  const { setIsAuthenticated } = useContext(CartContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()

    //Analisis de que no esté vacío
    let validationError = {}
    if (!email) validationError.email = "Es necesario ingresar un e-mail"
    if (!password) validationError.password = "Es necesario ingresar una contraseña"

    if (Object.keys(validationError).length > 0) {
      setError(validationError)
      return
    }

    //llama al JSON
    try {
      const res = await fetch('data/users.json');
      const users = await res.json();

      const foundUser = users.find((user) => user.email === email && user.password === password)

      if (!foundUser) {
        setError({ email: 'credenciales inválidas' })
      } else {
        console.log('User role:', foundUser.role);
        if (foundUser.role === 'admin') {
          setIsAuthenticated(true);
          navigate('/admin')
        } else {
          navigate('/')
        }
      }

    } catch (err) {
      console.error('Error fetching users:', err);
      setError({ email: 'Algo salió mal, por favor intentalo más tarde' })
    }
  }

  return (
    <form className='lgform_container' onSubmit={handleSubmit} >

      <div className='lgform_container-box'>
        <Link to='/'><FontAwesomeIcon className='lgform_volver' icon={faArrowLeft} /></Link>
        <h2>¡Hola!</h2>
        <div className='lgform_container-line'>
          <label
            className='lgform_container-label'
            htmlFor="formBasicEmail">
            E-mail
          </label>
          <input
            className='lgform_container-input'
            id='formBasicEmail'
            type="email"
            placeholder='Ingresá tu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && (
            <div className='lgform_error'>{error.email}</div>
          )}
        </div>

        <div className='lgform_container-line'>
          <label
            className='lgform_container-label'
            htmlFor="formBasicPassword">
            Contraseña
          </label>
          <input
            className='lgform_container-input'
            id='formBasicPassword'
            type="password"
            placeholder='Ingresá tu contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <div className='lgform_error'>{error.password}</div>
          )}
        </div>

        <button className='lgform_btn'
          type='submit'
        >Ingresar</button>
      </div>
    </form>
  )
}

export default Login
