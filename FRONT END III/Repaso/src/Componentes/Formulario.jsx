import { useState } from "react";

function Formulario({ onAddPatient }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  //funcion para prevenir comportamiento del Formulario.
  function handlerSubmit(e) {
    e.preventDefault();
    if (
      
      validacionCamposVacios(nombre, apellido) == true
    ) {
      onAddPatient({ nombre, apellido }); //Genera un objeto con esos dos atributos ✅
      setNombre("");
      setApellido("");
      alert("Se guardaron exitosamente los datos del paciente ✅🏥");

      //Queda en blanco porque los vaceo los inputs para el desarrollo. ✅
    }
  }

  //Validaciones de los inputs ✅✅✅

  function validacionInputs(nombre, apellido) {
    let state = true;
    if (nombre.length < 3 || apellido.length < 3) {
      alert("Ingrese un nombre mayor a 3 Letras ❌❌❌");
      state = false;
      return state;
    }
    return state;
  }

  function validacionInputs2(nombre) {
    let state = true;
    if (!isNaN(nombre)) {
      alert("Es un numero ❌❌❌❌");
      state = false;
      return state;
    }
    return state;
  }

  function validacionCamposVacios(nombre, apellido) {
    let state = true;
    if (nombre === "" || apellido === "") {
      alert("Los campos estan vacios ❌❌");
      state = false;

      return state;
    }
    return state;
  }

  //Validaciones de los inputs ✅✅✅

  function handlerNombre(e) {
    setNombre(e.target.value);
  }

  function handlerApellido(e) {
    setApellido(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Ingresar Nombre del Paciente</label>
        <input
          placeholder="Nombre "
          value={nombre}
          type="text"
          onChange={handlerNombre}
        />
        <label>Ingresar Apellido del Paciente</label>
        <input
          placeholder="Apellido"
          value={apellido}
          type="text"
          onChange={handlerApellido}
        />

        <button type="submit"> Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
