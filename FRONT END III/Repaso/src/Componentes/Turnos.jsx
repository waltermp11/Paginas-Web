import React from 'react'

const Turnos = ({pacientes}) => {

    function mostrarTurnos() {
        console.log(pacientes);
    }
  return (
    <div>
        <h1>Turnos</h1>
        {pacientes.map((paciente,index)=> (
            <div key={index}> <p> {paciente.nombre}</p></div>
        ))}
    </div>
  )
}

export default Turnos;
