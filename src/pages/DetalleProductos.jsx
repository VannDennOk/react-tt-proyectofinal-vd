import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const DetalleProductos = ({ productos, cart, borrarProducto, vaciarCarrito, isCartOpen, setCartOpen, actualizarCantidad }) => {

  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);

  console.log(productos);
  const { id } = useParams()
  const productoDetalle = productos.find(product => product.id === id)

  return (
    <>
      <Header
        cartItems={cart}
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        vaciarCarrito={vaciarCarrito}
        borrarProducto={borrarProducto}
        actualizarCantidad={actualizarCantidad}
      />
      <main>
        <div>
          <h1>Detalle del producto: {id}</h1>
          {productoDetalle ? (
            <h2>{productoDetalle.name}</h2>
          ) : (<p>Producto no encontrado</p>)}
        </div>
      </main>
      <Cart cartItems={cart} />
      <Footer />
    </>
  )
}

export default DetalleProductos
