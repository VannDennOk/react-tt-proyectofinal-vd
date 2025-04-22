import React from "react";
import Button from "../Button/Button";

function TarjetaProductos ({ titulo, img, alt, descripcion, promocion, botonTexto }) {
    
    return <div>
                <img src={img} alt={alt} />
                <span>
                    <h2>{titulo}</h2>
                    <h3>{descripcion}</h3>
                    <span>
                        <p>{promocion}</p>
                    </span>
                    <Button
                    texto={botonTexto} 
                    />
                </span>
            </div>
}

export default TarjetaProductos