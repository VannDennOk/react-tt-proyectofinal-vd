import React, { useEffect, useState } from 'react'
import './styles/pages.css'
import logo from '../assets/Img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import FormularioProducto from '../components/FormularioProducto';
import { Link } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import FormularioEdicion from '../components/FormularioEdicion';

const Admin = () => {

  const {
    products,
    loading,
    open,
    setOpen,
    openEditor,
    setOpenEditor,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
  } = useContext(AdminContext)

  return (
    <div className='container_admin'>
      <nav className='admin_nav'>
        <Link to='/'><h1><img className='logo' src={logo} alt='logo liv' /></h1></Link>
        <div className='admin_nav-links'>
          <button className='admin_nav-btn' onClick={() => setOpen(true)}><FontAwesomeIcon icon={faPlus} />Agregar nuevo producto</button>
          {open && (
            <FormularioProducto
              onAgregar={agregarProducto}
              onClose={() => setOpen(false)}
            />
          )}
          <Link to='/'><FontAwesomeIcon icon={faArrowRightFromBracket} />Salir</Link>
        </div>
      </nav>

      <h2>Panel Administrativo</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className='admin-products'>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div className='admin_products-left'>
                  <img src={product.imgUrl} alt={product.name} />
                </div>
                <div className='admin_products-right'>
                  <div className='admin-products-data'>
                    <span><h3>Nombre:</h3><p>{product.name}</p></span>
                    <span><h3>Product Id:</h3><p>{product.id}</p></span>
                    <span><h3>Promo:</h3><p>{product.promo}</p></span>
                    <span><h3>Precio:</h3><p>$ {product.price}</p></span>
                    <span><h3>Stock:</h3><p>{product.stock} u.</p></span>
                    <span><h3>Descripción:</h3><p>{product.description}</p></span>
                    <span><h3>Ingredientes:</h3><p>{product.ingredients}</p></span>
                    <span><h3>Uso:</h3><p>{product.use}</p></span>
                    <span><h3>Categoría:</h3><p>{product.category}</p></span>
                  </div>
                  <div className='admin-products-btns'>
                    <button className='btn-negro btn-160' onClick={() => {
                      setOpenEditor(true)
                      setSeleccionado(product)
                    }}>
                      <FontAwesomeIcon icon={faPen} />
                      Editar
                    </button>
                    <button className='btn-gris btn-160' onClick={() => eliminarProducto(product.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {openEditor && (<FormularioEdicion
        productoSeleccionado={seleccionado}
        onActualizar={actualizarProducto}
        onClose={() => {
          setOpenEditor(false)
          setSeleccionado(null)
        }}
      />)}

    </div>
  )
}

export default Admin