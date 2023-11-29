import React, { useEffect } from 'react'
import { useState } from 'react'

const MouseEvent = () => {

const [mouseX,setMouseX] = useState(0);
const [mouseY,setMouseY] = useState(0);

const handlerMouse =(e) => {
    setMouseX(e.clientX) // De aca sacamos el valor
    setMouseY(e.clientY)
}

useEffect (()=> {

    //Montaje
    console.log("Montaje",window.addEventListener("mousemove",handlerMouse));
    //Actualizado
    console.log("Coordenadas :" + mouseX,mouseY);
    //Desmontaje
    return ()=> {

      console.log("Desmontaje del Componente", window.removeEventListener("mousemove",handlerMouse));
    }

})

  return (
    <div>
        <h1>Componente Mouse Event</h1>
        <h3>  
            x:{mouseX}  y: {mouseY} 
        </h3>
      
    </div>
  )
}

export default MouseEvent
