import React from "react";
import { useState } from "react";

const Lista = () => {
  const [count, setCount] = useState(1);
  const [item,setItem] = useState([]);

  const contador = (newItem) => {
    setItem([... item, newItem]);
    setCount(count + 1);
    
  };

  return (
    <>
      <ul>

        {item.map((jitem,index) => (
                <li key={index}> 
                Se agrego  {jitem} 
                    </li>
        ))}
        
      </ul>
      <button onClick={()=> contador (count)}>Agregar Elemento</button>
    </>
  );
};

export default Lista;
