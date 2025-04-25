import React from "react";
import Button from "../Button/Button";
import "./TarjetaProductos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function TarjetaProductos({ titulo, img, alt, descripcion, promocion, botonTexto }) {

    return <div className="product_card">
        <div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faHeart} />
            <img className="product_card-img" src={img} alt={alt} />
            <span>
                <p className="product_cardPromo">{promocion}</p>
            </span>
        </div>
        <span className="product_card-txt">
            <h2 className="product_cardName">{titulo}</h2>
            <h3 className="product_cardDescrip">{descripcion}</h3>
            <Button
                texto={botonTexto}
            />
            
        </span>
    </div>
}

export default TarjetaProductos