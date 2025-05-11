import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProductList from "../components/ProductList/ProductList"
import loading from "../assets/loading.gif"
import Cart from "../components/Cart/Cart"

const GaleriaDeProductos = ({
  cart,
  productos,
  vaciarCarrito,
  handleAddToCart,
  borrarProducto,
  isCartOpen,
  setCartOpen,
  carga,
  actualizarCantidad
}) => {

  const cartCount = cart.length

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
      <h1>Galeria de productos</h1>
      {
        carga ? <div className='container_loading'><img src={loading} alt='loading' /> </div> :

          <ProductList addToCart={handleAddToCart} products={productos} />
      }
      <Cart cartItems={cart} />

      <Footer />
    </>
  )
}

export default GaleriaDeProductos