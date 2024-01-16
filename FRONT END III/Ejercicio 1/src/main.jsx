import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Principal from './Componentes/Principal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Principal/>
    <Footer/>
    
  </React.StrictMode>,
)
