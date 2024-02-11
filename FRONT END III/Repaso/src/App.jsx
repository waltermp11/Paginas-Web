import { useState } from "react";

import Formulario from "./Componentes/Formulario";
import Turnos from "./Componentes/Turnos";
import "./App.css";

function App() {
  const [pacientes, setPacientes] = useState([]);

  function addPatient(paciente) {
    setPacientes([...pacientes,paciente]);
  }

  return (
    <>
      <h1>Registo de Pacientes 🏥📄📄</h1>
      <Formulario onAddPatient = {addPatient}/>
      <Turnos pacientes={pacientes} />
    </>
  );
}

export default App;
