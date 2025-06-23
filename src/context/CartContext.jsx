import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  });

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [carga, setCarga] = useState(true);
  const [isAuthenticated, setIsAuth] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const [isCartOpen, setCartOpen] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');

  //conecta MockAPI
  useEffect(() => {
    fetch('https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins')
      .then((respueta) => respueta.json())
      .then((datos) => {
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
  }, []);

  //persistencia en el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  //Maneja la apertura del carrito (bloquea el scroll)
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
  }, [isCartOpen]);

  //agrega el producto desde el formularios sin recargar las páginas
  const addProducto = async (nuevo) => {
    try {
      const res = await fetch("https://68476daeec44b9f3493d0ddc.mockapi.io/vitamins", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevo),
      });
      const creado = await res.json();
      setProductos((prev) => [...prev, creado]);
      toast.success("Producto agregado correctamente");
      return true;
    } catch (err) {
      console.error(err);
      toast.error("No se pudo crear el producto");
      return false;
    }
  };

  //Agrega el producto al carrito
  const handleAddToCart = (product) => {
    const productExist = cart.find((item) => item.id === product.id)
    if (!productExist) {
      toast.success(`El producto ${product.name} se ha agregado al carrito`)
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
    localStorage.removeItem("cart")
  }

  //maneja el contador
  const cartCount = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0)
  }

  //Búsqueda de productos
  const productosFiltrados = productos.filter((producto) => producto?.name.toLowerCase().includes(busqueda.trim().toLowerCase()))

  //Productos destacados
  const productosDestacados = productos.filter((producto) => producto?.category?.toLowerCase() === 'destacado');


  return (
    <CartContext.Provider
      value={
        {
          cart,
          productos,
          setProductos,
          error,
          carga,

          isAuthenticated,
          setIsAuth,

          addProducto,

          vaciarCarrito,
          handleAddToCart,
          borrarProducto,
          actualizarCantidad,
          cartCount,

          isCartOpen,
          setCartOpen,
          modalAbierto,
          setModalAbierto,
          mensajeModal,


          busqueda,
          setBusqueda,
          productosFiltrados,
          productosDestacados,
        }
      }>
      {children}
    </CartContext.Provider>
  )
}