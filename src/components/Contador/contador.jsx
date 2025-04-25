import { useState } from "react";

function Contador() {
    console.log(useState(0));
    const [contador, setContador] = useState(0);
    const [cart, setCart] = useState(0);

    return (
        <div>
            <div>
                <p>Valor del contador: {contador}</p>
                <button onClick={()=> setContador(contador + 1)}>Incrementar</button>
            </div>
            <div>
                <button onClick={()=> setCart(cart - 1)}>-</button><p>{cart}</p><button onClick={()=> setCart(cart + 1)}>+</button>
            </div>
        </div>      
    );
}

export default Contador;