import { useState } from "react";
import PrincipalHijo from "./PrincipalHijo";

function Principal() {

    const [state,setState] = useState(0);

    function handlerState() {
        setState ((state) => state + 1);
        return;
    }
  return (
    <div>
      <h1> Titulo Principal</h1>
      <p>
        Aca vamos a tener un parrafo de prueba, donde vamos a incluir el
        ejercicio que tenemos que desarrollar. 
        </p> 
        <br></br>
        
        <p> Hacer una pagina que al pulsar un
        boton se añadan automaticamente nuevos elementos a una lista de
        elementos que contienen su estado controlado por hook. Todos los
        elementos de la lista deben aparecer en la pantalla y según la
        interaccion realizada al pulsar el boton, esta lista debe actualizarse
        automaticamente.
      </p>

      <ul>
        <li>El punto 1 ha sido añadido a la lista</li>
        <li>El punto 2 ha sido añadido a la lista</li>
        <li>El punto 3 ha sido añadido a la lista</li>
        <li>El punto 4 ha sido añadido a la lista</li>
      </ul>

      <button onClick ={handlerState}> Agregar  {state}</button>

    <PrincipalHijo state={state} setState={setState}/>
    </div>
  );
}

export default Principal;
