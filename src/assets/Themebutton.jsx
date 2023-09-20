import React, { useContext } from 'react'
import {ThemeContext} from './Themebtn'
const Themebutton = () => {
    const {toggleTheme,theme}=useContext(ThemeContext);
  return (
    <div>
      <button onClick={()=>{toggleTheme()}}>
      {theme?<i className='bx bx-sun text-lg font-bold sm:text-3xl '  style={{color:'white'}}></i>:<i className='bx bx-moon text-lg font-bold sm:text-3xl  '></i>}
      </button>
    </div>
  )
}

export default Themebutton
