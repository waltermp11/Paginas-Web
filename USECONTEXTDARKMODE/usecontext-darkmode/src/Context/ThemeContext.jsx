/* eslint-disable react/prop-types */
import {  createContext, useContext, useState } from "react";

export const ThemeContext =createContext();



export const ThemeContextProvider = ({children}) => {
    const [contextTheme,setContextTheme]= useState('light')
    const values={contextTheme,setContextTheme}
  return (
    <div>

        <ThemeContext.Provider value={values}> 
        {children} {/*Aca todos los hijos lo van a heredar */}

        </ThemeContext.Provider>
      
    </div>
  )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    return context

}

