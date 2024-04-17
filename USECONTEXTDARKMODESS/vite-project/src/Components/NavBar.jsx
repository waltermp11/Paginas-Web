import React, { useContext } from 'react'
import ThemeContext from '../Context/context'

const NavBar = () => {

  const {theme,handlerChangeTheme} = useContext(ThemeContext);
  return (
    <div>
        <h1>Esta es la NavBar</h1>
        <button onClick={handlerChangeTheme}
        style={{background:theme.background, color:theme.font}}>
          Cambiar Tema
        </button>
      
    </div>
  )
}

export default NavBar
