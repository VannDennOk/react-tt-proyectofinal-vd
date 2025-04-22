import React from "react";

function Button({ texto }) {
    return <button> {texto} </button>
}


/*     
function Button({ texto, colorBG }) {
const estilo = {backgroundColor: colorBG};
    return <button style = {estilo} > {texto} </button>
}
*/

export default Button