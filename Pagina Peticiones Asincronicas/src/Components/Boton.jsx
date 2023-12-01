import React from 'react'

const Boton = ({texto,count,incrementar}) => {

  console.log(`${texto} Renderizado`);
  return (
    <>
    <p>{texto}</p>
    <h2>{count}</h2>
    <button
    onClick={incrementar}
    > Incrementar</button>    
    </>
  )
}

export default Boton;
