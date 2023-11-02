import React from "react";
import { useState } from "react";

const Formulacio = () => {
  //Agrego mis estados principales para cada campo
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState(0);
  const newAge = nombre-10;

  const handlesubmit = (e) => {
    e.preventDefault(); //Prevenimos el evento
    //la ideda es manejar las validaciones aca

    if ([nombre,categoria].includes('') || fecha ===0) {
        alert('Los datos son vacios ❌❌')
        
    }
    else{
        
        alert('Los datos fueron enviados correctamente y su nueva edad es : '+newAge);
    }




    console.log("Okay");
  };
  return (
    <>
      <h2>Ingresar Productos</h2>
      <form onSubmit={handlesubmit}>
        <h1>Formulario de Practica</h1>
        <label htmlFor="">Nombre : </label>
        <input
          type="number"
          placeholder="Ingresar nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor=""> Cateogria : </label>
        <input
          type="text"
          placeholder="Ingresar Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <label htmlFor=""> Fecha: </label>
        <input
          type="date"
          placeholder="Ingresar Fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Formulacio;
