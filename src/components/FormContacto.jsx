import React, { useState } from 'react'
import './styles/FormContacto.css'

export default function FormContacto() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');

    function manejarEnvio(evento) {
        evento.preventDefault();
        alert(`Formulario enviado por: ${nombre} ${apellido} ${email} `);
        setNombre('')
        setApellido('')
        setEmail('')
        }

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingresá tu nombre"
            />
            <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Ingresá tu apellido"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresá tu e-mail"
            />
            <button type="submit">Enviar</button>
        </form>
    );
}