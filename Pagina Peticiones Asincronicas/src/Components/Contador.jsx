import React, { useCallback, useState } from "react";
import Boton from "./Boton";

const Contador = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [contador3, setContador3] = useState(0);

  //useCallback para que no nos renderice al mismo tiempo todas las funciones, si no la que nosotros estemos usando, para optimizar recursos en nuestra pagina! 😁

  //callbacks implementados en nuestro programa
  const incrementar1 = useCallback(() => {
    () => {
      setContador1(contador1 + 1);
    };
  }, [contador1]); //Lo que quiero que memorices es lo que esta en los []
  const incrementar2 = useCallback(() => {
    () => {
      setContador2(contador2 + 1);
    };
  }, [contador2]);

  const incrementar3 = useCallback(() => {
    () => {
      setContador3(contador3 + 1);
    };
  }, [contador3]);

  /**********************RETURN************************* */
  //terminar la actividad dada por el docente!
  return (
    <>
      <hr />
      <h3>Contador UseCallBack</h3>

      <Boton
        texto="Contador 1"
        count={contador1}
        incrementar={incrementar1}
        //Aca pasamos lsa props para el correcto desarrollo ✔️✔️
      />
      <Boton texto="Contador 2" count={contador2} incrementar={incrementar2} />
      <Boton texto="Contador 3" count={contador3} incrementar={incrementar3} />
    </>
  );
};

export default React.memo(Contador);
