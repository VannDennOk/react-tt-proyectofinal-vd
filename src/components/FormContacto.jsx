import React, { useState } from 'react'
import './styles/FormContacto.css'
import contactoimg from '../assets/contactoimg.png'

const FormContacto = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    function manejarEnvio(e) {
        e.preventDefault();
        alert(`Formulario enviado por: ${nombre} ${email} `);
        setNombre('')
        setEmail('')
        setMensaje('')
    }

    return (
        <section className='contacto_main'>
            <div className='contacto_container'>

                <div className='contacto_container-left'>
                    <img className='contacto_img' src={contactoimg} alt="ositos alineados" />
                </div>

                <div className='contacto_container-right'>
                    <h3>Formulario de contacto</h3>
                    <p>Completá el formulario y nos pondremos en contacto lo antes posible.</p>

                    <form onSubmit={manejarEnvio}>
                        <div className='contacto_form-line'>
                            <label htmlFor='formBasicName'>Nombre</label>
                            <input
                                id='formBasicName'
                                type="text"
                                placeholder="Ingresá tu nombre"
                                required
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className='contacto_form-line'>
                            <label htmlFor='formBasicEmail'>E-mail</label>
                            <input
                                id='formBasicEmail'
                                type="email"
                                placeholder="Ingresá tu email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='contacto_form-line'>
                            <label htmlFor='formBasicMensaje'>Mensaje</label>
                                                
                            <textarea
                                id='formBasicMensaje'
                                name='formBasicMensaje'
                                placeholder="Ingresá un mensaje"
                                rows="4"
                                cols="50"
                                required
                                value={mensaje}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className='btn-negro' type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default FormContacto