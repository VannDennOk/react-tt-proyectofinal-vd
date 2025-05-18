import React from 'react'
import { useParams } from 'react-router-dom'

const DetalleProductos = ({productos}) => {
    
    console.log(productos);
    const {id} = useParams()
    const productoDetalle = productos.find(product => product.id === id)
    
  
    return (
    <section>
        
    <div>
      <h1>Detalle del producto: {id}</h1>
        {productoDetalle ? (      
            <h2>{productoDetalle.name}</h2>            
        ) : (<p>Producto no encontrado</p>)}
    </div>
    </section>
  )
}

export default DetalleProductos
