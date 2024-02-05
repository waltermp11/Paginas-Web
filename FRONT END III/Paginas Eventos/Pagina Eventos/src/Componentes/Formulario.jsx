import { useState } from "react";
import styles  from "../Styles/Formulario.module.css";

function Formulario() {

  const [nombre,setNombre] = useState("");
  function miEvento() {

    console.log("Se guardo el nombre exitosamente ✅");
    
  }

  function handlerSubmit(e) {
    e.preventDefault();
  }

  function handlerNombre (e) {
    setNombre(e.target.value);

    if (nombre ==="" || nombre === 0  || nombre.length<3) {
      alert("No se puede registrar ese nombre ❌❌❌");
    }
    else{
      alert("El nombre Almacenado es  " + nombre + " ✅✅✅");
    }
  }
  return (
    <div>
      <form onSubmit={handlerSubmit} className={styles.formulario_css}>
        <label>Nombre</label>
        <input placeholder="Ingresar nombre" type="text" onChange={handlerNombre} />
        <button onClick={miEvento} > Enviar</button>
      </form>
    </div>
  );
}
export default Formulario;
