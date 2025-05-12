import React from "react";
import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Modal = ({mensaje1, mensaje2, onClose}) => {
    return (
        <div className="modal_overlay" onClick={onClose}>
            <div className="modal_container" onClick={(e) => e.stopPropagation()}>
                <FontAwesomeIcon icon={faTriangleExclamation} className="modal_alert-icon"/>
                <div>
                    <p>{mensaje1}</p>
                    <p>{mensaje2}</p>
                </div>
                <button className="modal_btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Modal;