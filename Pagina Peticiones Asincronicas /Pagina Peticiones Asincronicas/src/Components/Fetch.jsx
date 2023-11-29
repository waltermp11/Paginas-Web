import React, { useEffect, useState } from 'react'

const Fetch = () => {

  const [vector,setVector] = useState([]);


  useEffect(()=> {
    getData();



  },[])

//Aca consumimos la API? no se, en realidad no entendi

  const getData = async () => {
    const data = await
    fetch ("https://jsonplaceholder.typicode.com/users")
    const convert   =await data.json()
    console.log(data);
    setVector(convert) 
  console.log(setVector); }
  return (
    <>
        <h1>Fetch Ejemplo </h1>
        <ul>
          {vector.map(object => (
            <li>
              {object.name}
            </li>
          ))}
        </ul>

    
    
    
    
    </>
  )
}

export default Fetch
