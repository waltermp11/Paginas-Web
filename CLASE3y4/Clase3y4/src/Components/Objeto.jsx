import React from "react";

const Objeto = () => {
  //Aca vamos a crear un array de objetos! ✅✅

  const arrayPcs = [
    { id: 1, nombre: "windows", precio: 1000 },
    { id: 5, nombre: "windows", precio: 1000 },
    { id: 2, nombre: "windows", precio: 1000 },
    { id: 3, nombre: "windows", precio: 1000 },
    { id: 4, nombre: "windows", precio: 1000 },
  ];

  return (
    <>
        <h3>Map de Objetos</h3>
        <ol>
            
            {arrayPcs.map((pc)=>

            <li>{pc.id} -{pc.nombre} - {pc.precio}</li>
            
            
            
            )}
        </ol>
    
    
    
    
    
    
    
    </>





  );
};

export default Objeto;
