import {Outlet} from 'react-router-dom'
import './App.css';                                 
import Footer from './Components/Footer'

function App() {

  return (
    <>

    <h1>Aca va el inicio de la App estatico</h1>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default App
