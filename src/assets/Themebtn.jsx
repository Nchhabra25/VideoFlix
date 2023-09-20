import React, { createContext, useEffect,useState } from 'react'
export const ThemeContext=createContext();
const Themebtn = ({children}) => {
    const[theme,setTheme]=useState(false)
    const toggleTheme=()=>{
        if(theme===false) setTheme(true)
        else setTheme(false)
    }
    useEffect(()=>{
        document.body.classList.toggle('dark',theme);
      },[theme])
  return (
    <>
      <ThemeContext.Provider value={{toggleTheme,theme,setTheme}}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export default Themebtn;
