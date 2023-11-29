import React, { useState,useEffect } from 'react';

import axios from 'axios';




const AxiosPokemon = () => {


    const [name,setName] = useState("");
    const [ability,setAbility] = useState([])

    useEffect(() => {
        axios.get ('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(res =>{
            setName (res.data.name)
            setAbility(res.data.ability)
        }) //haceme esto despues de haber ejecutado lo de arriba
        
    }, []);
  return (
    <>
        <h3>Pokemon : {name}</h3>
        {ability}
    
    
    
    
    </>
  )
}

export default AxiosPokemon
