import { useContext } from "react"
import ThemeContext from "../context"
import NavBar from "./NavBar"
import Body from "./Body"

const Layout = ({children}) => {
    //Aca cuando tenemos componentes anidados que renderice las cosas, que es lo mismo poner los hijos

    const {theme} = useContext(ThemeContext)
  return (
    <div style={{background:theme.background,color:theme.font}}>
      <NavBar/>
      <Body/>
    </div>
  )
}

export default Layout
