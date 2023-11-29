import React, { useState } from "react";
import styles from "../css/Formulario2.module.css";

const Consigna2 = () => {
  //states
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [edad, setEdad] = useState(0);

  //Creamos los manejadores para capturar los inputs
  const onChangeNombre = (e) => {
    setNombreCompleto(e.target.value);
  };

  const onChangeEdad = (e) => {
      setEdad(parseInt(e.target.value));
    
  };

  //Validaciones
  //validar nombre completo
  const validarNombreCompleto = (nombre) => {
    const state = true;
    if (
      nombre.length < 10 ||
      !isNaN(nombre) ||
      nombre.replace(/[^0-9]/g, "".length) != 0 ||
      nombre == ""
    ) {
      alert("Escriba un nombre Completo Valido");
      state = false;
      return state;
    }
    return state;
  };

  //validar edad

  const validarEdad = (edad) => {
    const state = true;
    const soloLetras = /^[A-Z]+$/i;
    if (parseInt(edad) < 25 || soloLetras.test(edad) == true) {
      alert("La edad no es valida, tiene que ser mayor a 25 año, tu edad es de "+ parseInt(edad-10));
      state = false;
      return state;
    }
    return state;
  };

  //Funcion quitar edad


  //Manejador handler Submit o Rejuvenecer en este caso
  const handlerRejuvenecer = (e) => {
    e.preventDefault();

    if (validarNombreCompleto(nombreCompleto) == true &&validarEdad(parseInt(edad)) == true ) {
        alert ("Su nueva edad es: " + parseInt(edad-10));
    
        console.log(edad-10);
        
    }

    
    //Eventos que vamos a validar antes de proceder
  };

  return (
    <>
      <h1>Consigna 2</h1>

      <form onSubmit={handlerRejuvenecer} className={styles.Formulario2}>
        <label >Nombre Completo</label>
        <input 
        type="text" 
        onChange={onChangeNombre} />
    
        <label >Edad </label>
        <input 
        type="text" 
        onChange={onChangeEdad} />

        <button type="submit" className={styles.buttonRejuvenecer}>
          Rejuvenecer {" "}
        </button>
      </form>
    </>
  );
};

export default Consigna2;
