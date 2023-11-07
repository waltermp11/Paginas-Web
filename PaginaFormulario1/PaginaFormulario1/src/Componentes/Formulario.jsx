import React from "react";
import { useState } from "react";
import ErrorBox from "./ErrorBox";
import Cajon from "./Cajon";

const Formulario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [messageError,setMessageError] = useState(0);

  //Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    //Aca entrarian las validaciones necesarias para el desarrollo del login

    if (username.length<=3 || password.length<=3) {
        setMessageError(!messageError);
    }
    else {
        alert ( "you are login!  " + username + " ✅");
        setMessageError(messageError)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value.trimStart())}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trimStart())}
        />

        <button className="button-submit" type="submit">Submit</button>

        {messageError ? <ErrorBox/>: <Cajon/>}
      </form>
    </>
  );
};

export default Formulario;
