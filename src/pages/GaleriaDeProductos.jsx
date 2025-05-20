import React from "react"
import './pages.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import loading from "../assets/loading.gif"
import Cart from "../components/Cart"
import BannerBottom from "../components/BannerBottom"

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

  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);

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

      <main className="container_page">
        <h1>Galeria de productos</h1>
        {carga ? <div className='container_loading'><img src={loading} alt='loading' /><p>Cargando los productos</p></div> :
          <ProductList addToCart={handleAddToCart} products={productos} />}

        <BannerBottom />

        <Cart cartItems={cart} />
      </main>

      <Footer />
    </>
  )
}

export default GaleriaDeProductos