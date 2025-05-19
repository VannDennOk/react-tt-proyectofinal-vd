import React from 'react'
import './pages.css'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import crueltyFree from '../assets/crueltyFree.png'
import libreAzucar from '../assets/libreAzucar.png'
import libreGluten from '../assets/libreGluten.png'
import vegano from '../assets/vegano.png'

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
          {productoDetalle ? (
            <>
              <section className='container_productDetail'>
                <div className='container_productDetail-top'>
                  <div className='productDetail_img'><p>Imagen</p></div>
                  <div className='container_productDetail-right'>
                    <h1 className='productDetail-title'>{productoDetalle.name}</h1>
                    <p className='productDetail-txt'>Detalle del producto: {id}</p>
                    <p className='productDetail-price'>{productoDetalle.price}</p>
                    <h3 className='productDetail-subtitle'>Descripción</h3>
                    <p>{productoDetalle.description}</p>
                    <h3 className='productDetail-subtitle'>Ingredientes</h3>
                    <p>{productoDetalle.description}</p>
                    <h3 className='productDetail-subtitle'>Modo de uso</h3>
                    <p>{productoDetalle.description}</p>
                    <div className='container_productDetail-btn'>
                      <p className='productDetail-btn'>Contador</p>
                      <p className='productDetail-btn'>Agregar</p>
                    </div>
                  </div>
                </div>
                <div className='container_productDetail-banner'>
                  <h1><img className='banner_img' src={crueltyFree} alt='cruelty free' /></h1>
                  <h1><img className='banner_img' src={vegano} alt='vegano' /></h1>
                  <h1><img className='banner_img' src={libreGluten} alt='libre de gluten' /></h1>
                  <h1><img className='banner_img' src={libreAzucar} alt='libre de azucar' /></h1>

                </div>
              </section>
            </>
          ) : (<p>Producto no encontrado</p>)}
        </div>
      </main>
      <Cart cartItems={cart} />
      <Footer />
    </>
  )
}

export default DetalleProductos
