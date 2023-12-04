import React from 'react'
import {useParams} from 'react-router-dom'

const Productos = () => {

    const params = useParams()
    console.log(params); // nos trae un objeto con el id 100
  return (
    <div>

        <h1>Lista de Productos</h1>
      <ul>
            <li>1 id: {params.id}</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>  

      </ul>
    </div>
  )
}

export default Productos
