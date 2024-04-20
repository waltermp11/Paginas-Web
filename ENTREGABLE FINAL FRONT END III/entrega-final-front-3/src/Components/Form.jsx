import React, { useRef } from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  let arrayValidation = [false, false];
  let countArrayValidation = 0;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.length <= 5 || nombre == "" || nombre == null) {
      setErrorNombre("verifique su información nuevamente...❌❌");
    } else {
      if (/\d/.test(nombre)) {
        setErrorNombre(
          "Por favor verifique su información nuevamente... ❌❌ "
        );
      } else {
        setErrorNombre("");
        arrayValidation[0] = true;
      }
    }
    if (!email.includes("@") || !email.includes(".com")) {
      setErrorEmail(
        "Por favor verifique su información nuevamente... @ y .com❌❌"
      );
    } else {
      setErrorEmail("");
      arrayValidation[1] = true;
    }
    for (let i = 0; i < arrayValidation.length; i++) {
      if (arrayValidation[i] == true) {
        countArrayValidation += 1;
      }
    }

    if (countArrayValidation == 2) {
      setMensajeConfirmacion(
        "Gracias " + nombre + " te contactaremos cuando antes vía mail ✉️✉️✉️"
      );
      setTimeout(() => {
        setMensajeConfirmacion("");
        setNombre("");
        setEmail("");
      }, 3000);
    }
  };
  return (
    <div className="formulario">
      <h2>User Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="button-1">
          <label>Name </label>
          <input
            className="button-form"
            type="text"
            placeholder={"Enter Your Full Name"}
            value={nombre}
            id="email"
            onChange={(e) => setNombre(e.target.value)}
          />
          {errorNombre && (
            <div className="card-validation-form-null"> {errorNombre}</div>
          )}
        </div>

        <div className="button-2">
          <label>Email: </label>
          <input
            className="button-form"
            type="text"
            placeholder="Enter Your Email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <div className="card-validation-form-null"> {errorEmail}</div>
          )}
        </div>

        <button type="submit" className="button-send">
          Send
        </button>

        {mensajeConfirmacion && (
          <div className="card-confirmation-form-message">
            {mensajeConfirmacion}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
