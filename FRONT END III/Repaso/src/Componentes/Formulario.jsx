import { useState } from "react";

function Formulario({onAgregarPaciente,pacientes}) {

  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  let listaPacientes= pacientes;

  function handlerSubmit(e) { // evitar que se este rendirzando constantemente la pagina
    e.preventDefault();
    if (nombre&&apellido) {
      onAgregarPaciente({nombre,apellido}) // significa que creamos un objeto con esos 2 parametros.
      setNombre("");
      setApellido("");

    }
  }

  

  
  function valueApellido(e) {
    setApellido(e.target.value)
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           


    
  return (
    <div>
      <h1> Formulario</h1>

      <form onSubmit={handlerSubmit}>

        <label>Nombre </label>
        <input placeholder="Ingresar Nombre de Paciente " onChange={(e)=>{setNombre(e.target.value)}} value={nombre}/>
        <label>Apellido</label>
        <input placeholder="Ingresar Apellido del Paciente" onChange={valueApellido}value={apellido}/>

        <button type="submit"> Enviar</button>
        


      </form>
    </div>
  );
}
export default Formulario;
