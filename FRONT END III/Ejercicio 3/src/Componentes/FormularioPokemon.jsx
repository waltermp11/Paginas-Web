import { useState } from "react";
import styles from "../Styles/FormularioPokemon.module.css";

function FormularioPokemon() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [edad, setEdad] = useState(1);
  const [pokemon, setPokemon] = useState("");

  //Tengo que tener mi handler del formulario completo para prevenir que se recarge

  function handlerSubmit(e) {
    e.preventDefault();
  }

  function handlerNombreCompleto(e) {
    setNombreCompleto(e.target.value);
    console.log(nombreCompleto);
  }

  function enviarDatos() {

    alert("Se enviaron los datos correctamente ✅✅✅")
    
  }

  function handlerPokemon(e) {
    setPokemon(e.target.value);
    console.log(pokemon);
  }
  function handlerEdad(e) {
    setEdad(e.target.value);
    console.log(edad);
  }

  return (
    <div>
      <form onSubmit={handlerSubmit} className={styles.formulario}>
        <div>
          <label>Nombre Completo</label>
          <input
            placeholder="Ingresar Nombre Completo"
            onChange={handlerNombreCompleto}
            type="text"
          />
        </div>

        <div>
          <label> Edad</label>
          <input type="number" onChange={handlerEdad} />
        </div>

        <div>
          {" "}
          <label>Pokemon </label>
          <input
            placeholder="Ingrese su Pokemon Favorito"
            onChange={handlerPokemon}
            type="text"
          />
        </div>
        <button onClick={enviarDatos}> Enviar </button>
      </form>
    </div>
  );
}

export default FormularioPokemon;
