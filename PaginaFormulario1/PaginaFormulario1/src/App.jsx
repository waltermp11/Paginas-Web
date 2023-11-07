import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Componentes/Formulario'
import ErrorBox from './Componentes/ErrorBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='login'>
        <h1> Login </h1>
        <Formulario/> 
        

      </div>
    </>
  )
}

export default App
