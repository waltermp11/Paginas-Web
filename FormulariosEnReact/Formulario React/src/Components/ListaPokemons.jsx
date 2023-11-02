import React from "react";


const ListaPokemons = () => {
  const pokemonsInfo = [
    {
      id: 1,
      nombre: "Pickachu",
    },
    {
      id: 2,
      nombre: "Bulbasur",
    },
  ];

  const eliminarPokemon = (e, id) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <>
       <h1>Lista de Pokemons</h1>
      {pokemonsInfo.map(pokemon => (
        <div key={pokemon.id}>
          <p>{pokemon.nombre}</p>
          <button onClick={e => eliminarPokemon(e,pokemon.id)}>Eliminar Pokemon</button>
        </div>
        
      ))}
     
      </>
    
  );
};

export default ListaPokemons;
