import { useState } from "react";
import Principal from "./Principal";

function PrincipalHijo({state,setState}) {   //como props es un objeto, lo desestructuramos en las propiedades que quiero pasar, en este caso state y setState 

    function handlerState() {
        setState ((state) => state + 1);
        return;
    }
    
    return (

        <div>
             {/*Otro comentario */ }

            <h1>Aca vamos a tener la lista que se va agregar</h1>
            <button onClick={handlerState}>  Agregar </button>
            <h3>Numero de cuenta : {state}</h3>
            

        </div>
    );

}
export default PrincipalHijo;