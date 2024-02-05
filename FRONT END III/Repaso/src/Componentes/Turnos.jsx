function Turnos({ pacientes }) {
  return (
    <div>
      <h2>Turnos</h2>
      <ul>
        {pacientes.map((paciente, index) => (
          <li key={index}>{paciente.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
export default Turnos;
