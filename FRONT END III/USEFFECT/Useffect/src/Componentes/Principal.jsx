import React, { useState,useEffect } from 'react'

const Principal = () => {

    const [contador,setContador] = useState(0);
    const [forzador,setForzador] = useState(false)

    //Usando Hook useEffect ✅✅
    useEffect(()=>{
      alert("Bienvenid@ 😁")
    },[])

    //Si no le paso segundo parametro no se va a actualizar
    useEffect(()=>{
      console.log("El componente se actualizo ✅📚");
    })

    useEffect(()=>{
      console.log("El contador se incremento ▶️");
    },[contador])

    //Usando Hook useEffect ✅✅


    //Usando el useState forzador, para que solo renderice un useEffect
    function handlerForzador (){
      setForzador(!forzador);
    }


  return (
    <div>
        <h1>Vamos a tener 3 useEffect </h1>
        <h1> contador : {contador}</h1>
        
        <button onClick={()=>{setContador(contador+1)}}> Incrementar Contador </button>
        <hr/>
        <button onClick={handlerForzador}> Forzador </button>
      
    </div>
  )
}

export default Principal
