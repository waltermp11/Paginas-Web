import React, { useEffect, useState } from "react";

const ComponenteFuncional = () => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    //El componente se ha montado componentDidMount
    console.log("Este componente se ha montado");
    //El useEffect si es un hook, pero seria una funcion anonima!

    //Elc omponente se ha actualizado, componentDidUpdate
    console.log("%c------------ Actualizar -------------", "color:blue");

    //Aca es donde se desmonta
    return  ()=> {
        console.log("Desmontado :c");
    }
  }, [click]); // Cada vez que de un click, se esta actualizando, tambien aca es un parametro!

  const handler = () => {
    setClick(click + 1);
  };

  return (
    <div>
      <button // Evento de onClick
        onClick={handler}
      >
        {" "}
        Agregar : {click}
      </button>
    </div>
  );
};

export default ComponenteFuncional;
