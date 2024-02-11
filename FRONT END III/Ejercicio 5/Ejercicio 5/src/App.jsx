import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Principal from './Componentes/Principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Principal/>
    </>
  )
}

export default App
