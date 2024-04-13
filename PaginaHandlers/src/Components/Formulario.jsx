import React, { useState } from "react";
import styles from "../css/Formulario.module.css";

const Formulario = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Manejadores para capturar el valor de mis inputs
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  //Validaciones de los inputs de mi inicio de Sesion, nombre y password

  //Validacion UserName

  const validateUsername = (userName) => {
    const userNameWithOutSpaces = userName.trim(); // validacion para quitar los espacio
    let state = true;
    if (
      userNameWithOutSpaces.length < 5 ||
      !isNaN(userNameWithOutSpaces) ||
      userNameWithOutSpaces.replace(/[^0-9]/g, "".length) != 0
    ) {
      // Expresion para validar si tengo al menos un numero en el campo de texto
      alert("Hubo un error con el UserName! :c");
      state = false;
      return state;
    }
    return state;
  };

  //Validacion password

  const validatePassword = (password) => {
    const passwordWithOutsSpaces = password.trim(); // Validacion paraq uitar los espacios
    let state2 = true;
    const caracteres = /[!@#\$%\^&\*\(\)]/; //Expresion regular, de caracteres

    //passwordWithOutsSpaces.replace(/[^0-9]/g, "".length) == 0 ||

    if (
      caracteres.test(passwordWithOutsSpaces) == false ||
      passwordWithOutsSpaces.length < 6 ||
      passwordWithOutsSpaces.replace(/[^0-9]/g, "".length) == 0
    ) {
      //Aca estamos validando si tiene numeros, si tiene caracteres y mayor a 8
      alert(
        "La contraseña no es valida, debe de contener al menos tener un caracter especial y ser mayor a 6 caracteres "
      );
      state2 = false;
      return state2;
    }

    return state2;
  };

  //Siempre crear un evento para un boton de enviar o lo que sea que tenga planeado

  const handlerSubmit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento natural del button Submit

    validateUsername(userName);

    if (
      validateUsername(userName) == true &&
      validatePassword(password) == true
    ) {
      alert(
        "Hola " +
          userName +
          ", esperamos que te encuentres bien en el dia de hoy"
      );
    }
  };

  return (
    <>
      <h1>Inicio de Sesion</h1>

      <form onSubmit={handlerSubmit} className={styles.Formulario1}>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          className={styles.inputFormulario1}
          onChange={onChangeUserName}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.inputFormulario1}
          onChange={onChangePassword}
        />
        <button type="submit" className={styles.buttonEnviar}>
          Enviar{" "}
        </button>
      </form>
    </>
  );
};

export default Formulario;
