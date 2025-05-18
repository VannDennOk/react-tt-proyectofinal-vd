import React from 'react'
import './styles/Button.css'

function Button({ texto, colorBG }) {
    const estilo = {backgroundColor: colorBG};
    return <button className='basic_btn' style = {estilo}> {texto} </button>
}

export default Button