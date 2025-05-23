import React, { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { useNavigate } from 'react-router-dom'

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
    if (!email) validationError.email = "Es necesario ingresar un e-mail válido"
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
    <form className='form_container' onSubmit={handleSubmit} >
      <div className='form_container-box'>
        <label
          className='form_container-label'
          htmlFor="formBasicEmail">
          E-mail
        </label>
        <input
          className='form_container-input'
          id='formBasicEmail'
          type="email"
          placeholder='Ingresá tu e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && (
          <div className='form_error'>{error.email}</div>
        )}
      </div>

      <div className='form_container-box'>
        <label
          className='form_container-label'
          htmlFor="formBasicPassword">
          Contraseña
        </label>
        <input
          className='form_container-input'
          id='formBasicPassword'
          type="password"
          placeholder='Ingresá tu contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && (
          <div className='form_error'>{error.password}</div>
        )}
      </div>

      <button
        type='submit'
      >Ingresar</button>
    </form>
  )
}

export default Login
