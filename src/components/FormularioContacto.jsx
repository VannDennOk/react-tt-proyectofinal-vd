import React, { useState } from 'react'
import './styles/Formularios.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

const FormularioContacto = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errors, setErrors] = useState({})

    //Valida el formulario
    const validarFormulario = () => {
        const newErrors = {};
        if (!nombre.trim()) {
            newErrors.nombre = 'Ingresá tu nombre';
        }
        if (!email.trim()) {
            newErrors.email = 'Ingresá tu email';
        }
        if (!mensaje.trim()) {
            newErrors.mensaje = 'Ingresá un mensaje';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //Al apretar el botón enviar
    function manejarEnvio(e) {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }
        Swal.fire({
            title: `Gracias ${nombre}!`,
            text: `Pronto nos comunicaremos a tu email: ${email}. No ovides revisar el correo no deseado!`,
            customClass: {
                popup: 'mi-popup',
                title: 'mi-title',
                htmlContainer: 'mi-text',
                confirmButton: 'btn-negro btn-160',
            }
        });
        setNombre('')
        setEmail('')
        setMensaje('')
    }

    return (
        <div className='contacto_container'>
            <div className='contacto_container-left'>
                <img className='contacto_img' src='https://i.postimg.cc/tgPVCxq7/img-contacto.png' alt="ositos alineados" />
            </div>
            <div className='contacto_container-right'>
                
                    <div className='form_header-contacto'>
                        <h2>Formulario de contacto</h2>
                        <p>Completá el formulario y nos pondremos en contacto lo antes posible.</p>
                        <span className='form_header-mensaje'><FontAwesomeIcon icon={faCircleInfo} /><p>Todos los campos son obligatorios!</p></span>
                    </div>
                    <form onSubmit={manejarEnvio}>
                        <div className='form_line'>
                            <label htmlFor='formBasicName'>Nombre</label>
                            <input
                                id='formBasicName'
                                type="text"
                                placeholder="Ingresá tu nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <div className='mensajeError'>
                                {errors.nombre && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.nombre}</p></span>}
                            </div>
                        </div>
                        <div className='form_line'>
                            <label htmlFor='formBasicEmail'>E-mail</label>
                            <input
                                id='formBasicEmail'
                                type="email"
                                placeholder="Ingresá tu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className='mensajeError'>
                                {errors.email && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.email}</p></span>}
                            </div>
                        </div>
                        <div className='form_line'>
                            <label htmlFor='formBasicMensaje'>Mensaje</label>
                            <textarea
                                id='formBasicMensaje'
                                name='formBasicMensaje'
                                placeholder="Ingresá un mensaje"
                                rows="4"
                                cols="50"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                            />
                            <div className='mensajeError'>
                                {errors.mensaje && <span><FontAwesomeIcon icon={faTriangleExclamation} /><p>{errors.mensaje}</p></span>}
                            </div>
                        </div>
                        <button className='btn-negro' type="submit">Enviar</button>
                    </form>
                </div>
            </div>
       
    );
}

export default FormularioContacto