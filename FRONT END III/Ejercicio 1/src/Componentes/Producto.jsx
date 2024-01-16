import React from 'react'

const Producto = (props) => {
  return (
    <div>
        <h1>{props.nombre}</h1>
        <h3> Precio Articulo : {props.precio}</h3>
        <img src={props.imagen}/>
      
    </div>
  )
}

export default Producto;
