import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'



function App() {

  const[dogImage, setDogImage]=useState("");
  const [login,setLogin] = useState(true); //Aca nosotros tenemos un estado mientras va cargando 
  
  
  //Creamos el useEffect 
  useEffect(( ) => {
    fetch("https://dog.ceo/api/breeds/image/random"); // Me devuelve una promesa,
    ..then(() => {
      
    }).catch((err) => {
      
    });

  }, [])
  return (
    <>

     
    </>
  )
}

export default App
