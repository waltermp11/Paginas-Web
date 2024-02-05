import { useState } from "react";

let arrayNumeros = [];
function Principal() {
  const [state, setState] = useState(0);

  

   function handlerState() {
    setState ((state)=> state+1)
    arrayNumeros.push(state+1)
    console.log("Numero agregado :"+ arrayNumeros);
   

    
    
    return; 
  }

  
  return (
    <div>
      <h1>Pagina para agregar elementos</h1>
      <button onClick={handlerState}> Agregar Elemento </button>
      <hr></hr>
      <br></br>
      <h2>Cantidad de Elementos : {state} </h2>
      
      <ul>
            {arrayNumeros.map((item) => (
                <li key={item}>Se agrego {item}</li>
            ))}
        </ul>
    </div>
  );
}
export default Principal;
