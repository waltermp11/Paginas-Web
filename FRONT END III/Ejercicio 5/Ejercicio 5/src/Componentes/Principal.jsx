import { useState } from "react";
import Formulario from "./Formulario";
import Pedidos from "./Pedidos";


function Principal() {

    const [pedidos,setPedidos]=useState([]);

    function agregarPedido(pedido) {
        setPedidos([...pedidos,pedido]); //Spread operator

    }


    return (
<div>

<h1>Formulario de Pizza 🍕🍕</h1>
<Formulario onAgregarPedido={agregarPedido}/>
<Pedidos pedidos={pedidos} />


</div>

    )
}

export default Principal;