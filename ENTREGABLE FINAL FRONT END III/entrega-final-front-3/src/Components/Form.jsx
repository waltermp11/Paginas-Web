import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.length < 3 || nombre == "" || nombre == null) {
      setErrorNombre(
        "You cannot enter a name of less than 3 letters and it cannot be empty.   ❌❌"
      );
    } else {
      if (/\d/.test(nombre)) {
        setErrorNombre("the name cannot have numbers ");
      } else {
        setErrorNombre("");
      }
    }
    if (!email.includes("@" ) || !email.includes(".com")) {
      setErrorEmail("Your email should need @ and .com❌❌");
    } else {
      setErrorEmail("");
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
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <div className="card-validation-form-null"> {errorEmail}</div>
          )}
        </div>

        <button type="submit" className="button-send">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
