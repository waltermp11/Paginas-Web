import React from "react";

const ListaPokemons = () => {
  const pokemons = [
    { id: 1, nombre: "Pikachu" },
    { id: 2, nombre: "Bulbasur" },
    { id: 3, nombre: "Kadabra" },
    { id: 4, nombre: "Snorlax" },
  ];

  const handleSubmit = (id, e) => {
    e.preventDefault(); // Que no se ejecute de una como tal
    console.log("Se eliminio el pokemon " + id);
  };
  return (
    <>
      {pokemons.map((pokemon) => (

        <ul>
        <li key={pokemon.id}>
          <p>{pokemon.nombre}</p>
          <button onClick={(e) => handleSubmit(pokemon.id, e)}>
            Eliminar Pokemon
          </button>
        </li>
        </ul>
      ))}
    </>
  );
};

export default ListaPokemons;
