import React from 'react'

function Button({ texto, colorBG }) {
    const estilo = {backgroundColor: colorBG};
    return <button style = {estilo}> {texto} </button>
}

export default Button