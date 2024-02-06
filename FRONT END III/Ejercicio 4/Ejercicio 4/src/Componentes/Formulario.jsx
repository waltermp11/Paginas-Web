import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault(); //prevenimos que se envie el formulario✅✅
  };
  function handlerNombre  (e)  {
    setNombre(e.target.value);
  }
  function handlerApellido (e) {
    setApellido(e.target.value);
  }

  function mostrarValoresRegistrados() {
    alert("El nombre es : " + nombre + "Y su apellido es : " + apellido);
  }

  return (
    <div>
      <h1>formulario de Estudiantes</h1>
      <form onSubmit={handlerSubmit}>
        <label> Ingrese su Nombre</label>
        <input placeholder="Nombre" onChange={handlerNombre} value={nombre} />
        <label>Ingrese su Apellido </label>
        <input
          placeholder="Apellido"
          value={apellido}
          onChange={handlerApellido}
        />

        <button onClick={mostrarValoresRegistrados}>Enviar </button>
      </form>
    </div>
  );
}
export default Formulario;
