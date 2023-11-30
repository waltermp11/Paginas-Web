import React, { useEffect } from "react";

const RegistrarMensajes = () => {
    useEffect (()=> {
        const handlerResize= ()=>{

            console.log("Redimensionar: ", window.innerWidth, " x ", window.innerHeight);
        }
        window.addEventListener("resize",handlerResize)
    });


  return <>

  
  
  
  </>;
};

export default RegistrarMensajes;
