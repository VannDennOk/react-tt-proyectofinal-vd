import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(false)
  const [carga, setCarga] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [busqueda, setBusqueda] = useState('')

  //conecta MockAPI
  useEffect(() => {
    fetch('https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins')
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
  const [mensajeModal, setMensajeModal] = useState('');


  //Búsqueda de productos
  const productosFiltrados = productos.filter((producto) => producto?.name.toLowerCase().includes(busqueda.trim().toLowerCase()))


  //Productos destacados
 const productosDestacados = productos.filter((producto) => producto?.category?.toLowerCase() === 'destacado');


  const handleAddToCart = (product) => {
    const productExist = cart.find(item => item.id === product.id)
    if (!productExist) {
      setCart([...cart, { ...product, cantidad: product.cantidad || 1 }])
    } else {
      setMensajeModal('El producto ya fue agregado. Revisá tu carrito de compras!!!');
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
          mensajeModal,
          setModalAbierto,
          productosFiltrados,
          busqueda,
          setBusqueda,
          productosDestacados
        }
      }>
      {children}
    </CartContext.Provider>
  )
}