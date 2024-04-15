import { useContext } from "react"
import ThemeContext from "../context"

const Layout = ({children}) => {
    //Aca cuando tenemos componentes anidados que renderice las cosas, que es lo mismo poner los hijos

    const {theme} = useContext(ThemeContext)
  return (
    <div style={{background:theme.background,color:theme.font}}>
      {children}
    </div>
  )
}

export default Layout
