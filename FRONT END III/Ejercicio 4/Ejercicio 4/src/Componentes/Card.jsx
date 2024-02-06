import Formulario from "./Formulario";

function Card({ mensajeAlerta }) {
  return (
    <div>
      <p>Hola, soy una tarjeta! 💳💳💳</p>
      <p>{mensajeAlerta}</p>

    <Formulario/>
    </div>
  );
}

export default Card;
