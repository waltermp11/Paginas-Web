import { useEffect } from "react";
function NoPage() {

    //Aca tenemos el componente NoPage
    const mensajeError = alert("La Direccion de la Pagina no Existe ! ❌❌")
    useEffect(() => {
        mensajeError
    }, [])
  return <>
  <h1>ERROR 404</h1>
    

  </>;
}
export default NoPage;
