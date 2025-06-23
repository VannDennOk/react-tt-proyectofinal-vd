import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const AuthContext = createContext();
 
export const AuthProvider =({ children }) => {  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const navigate = useNavigate()
  const { setIsAuth } = useContext(CartContext)
   
  //persistencia de datos para el logueo
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuth') === 'true'
        if (isAuthenticated) {
            setIsAuth(true)
            navigate('/admin')
        }
    }, []);
  
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
        setError({ password: 'Credenciales inválidas' });
    } else {
        console.log('User role:', foundUser.role);
        if (foundUser.role === 'admin') {
          setIsAuth(true);
          localStorage.setItem('isAuth', true)
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
    <AuthContext.Provider 
        value={{
            email, 
            setEmail,
            password, 
            setPassword, 
            handleSubmit,
            error}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);