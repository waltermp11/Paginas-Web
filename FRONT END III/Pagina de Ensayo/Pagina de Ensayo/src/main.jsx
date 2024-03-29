import React from 'react'
import Principal from './Componentes/Principal.jsx'
import ReactDOM from 'react-dom/client'

import Titulo from './Componentes/Titulo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titulo/>
    <Principal/>
  </React.StrictMode>,
)
