import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(false)
  const [carga, setCarga] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  //conecta MockAPI
  useEffect(() => {
    fetch('https://681455e4225ff1af162889a4.mockapi.io/productos-ecommerce/product')
      .then(respueta => respueta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos)
          setCarga(false)
        }, 2000)
      })
      .catch((error) => {
        console.error('Error:', error)
        setCarga(false)
        setError(true)
      });
  }, [])

  //Maneja la apertura del acrrito
  const [isCartOpen, setCartOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
  }, [isCartOpen]);

  //Maneja el botón agregar al carrito (con mensaje modal si ya está agregado)
  const [modalAbierto, setModalAbierto] = useState(false);
  const [mensajeModal1, setMensajeModal1] = useState('');
  const [mensajeModal2, setMensajeModal2] = useState('');

  const handleAddToCart = (product) => {
    const productExist = cart.find(item => item.id === product.id)
    if (!productExist) {
      setCart([...cart, { ...product, cantidad: product.cantidad || 1 }])
    } else {
      setMensajeModal1("El producto ya fue agregado.")
      setMensajeModal2("Revisa tu carrito de compras!!!")
      setModalAbierto(true);
    }
  }

  //actualiza la cantidad en el carrito
  const actualizarCantidad = (id, nuevaCantidad) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  //maneja el botón borrar producto (icono de tacho de basura)
  const borrarProducto = (product) => {
    setCart(cart.filter(item => item.id != product.id))
  }

  //maneja el botón vaciar el carrito (elimina a todo lo que haya en el carrito)
  const vaciarCarrito = () => {
    setCart([])
  }

  //maneja e contador
  const cartCount = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0)
  }

  return (
    <CartContext.Provider
      value={
        {
          cart,
          productos,
          error,
          carga,
          isAuthenticated,
          setIsAuthenticated,
          vaciarCarrito,
          handleAddToCart,
          borrarProducto,
          isCartOpen,
          setCartOpen,
          actualizarCantidad,
          cartCount,
          modalAbierto,
          mensajeModal1,
          mensajeModal2,
          setModalAbierto
        }
      }>
      {children}
    </CartContext.Provider>
  )
}