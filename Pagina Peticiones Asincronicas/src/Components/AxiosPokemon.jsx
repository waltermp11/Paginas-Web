import React, { useState, useEffect } from "react";

import axios from "axios";

const AxiosPokemon = () => {
  const [name, setName] = useState("");
  const [habilidad,setHabilidad] = useState([]);

  useEffect(
    () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
        setName(res.data.name);
      setHabilidad(res.data.abilities.map(ability => ability.ability.name));
        
      });
    },
    //haceme esto despues de haber ejecutado lo de arriba

    []
  );
  return (
    <>
      <h3>Pokemon nombre:   {name}</h3>
      <h3>Habilidades : </h3>
      <ul>
        {habilidad.map((habilidades,index) => (
            <li key={index}>{habilidades}</li>
        ))}
      </ul>
    </>
  );
};

export default AxiosPokemon;
