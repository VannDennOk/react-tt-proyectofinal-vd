import React from "react";
import './styles/Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ mensaje, onClose }) => {
    return (
        <div className="modal_overlay" onClick={onClose}>
            <div className="modal_container" onClick={(e) => e.stopPropagation()}>
                <FontAwesomeIcon icon={faTriangleExclamation} className="modal_alert-icon" />
                <p>{mensaje}</p>
                <button className="btn-negro" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Modal;