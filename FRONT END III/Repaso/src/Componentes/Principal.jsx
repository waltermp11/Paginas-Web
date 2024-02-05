import React from 'react'
import Formulario from './Formulario'
import Turnos from './Turnos'
import {useState} from 'react'

const Principal = () => {

    const [pacientes,setPacientes] = useState([]);

    const  agregarPaciente = (paciente) =>{
        setPacientes([...pacientes,paciente]); //Esto es lo mismo que hacer un push.
    }

  return (
    <div className='Principal'>
        <h1>Registro de Pacientes</h1>
         <Formulario onAgregarPaciente ={agregarPaciente} />    
         <Turnos pacientes={pacientes}/>  


      
    </div>
  )
}

export default Principal
