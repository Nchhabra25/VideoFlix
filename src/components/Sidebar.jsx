import React from 'react'
import {Categories} from '../assets/Utils'
import { Stack,ThemeProvider,Typography, createTheme } from '@mui/material'
import {ThemeContext} from '../assets/Themebtn'
import { useContext } from 'react'
const themes = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Same as Tailwind CSS 'sm'
        sm: 768, // Same as Tailwind CSS 'md'
        md: 1024, // Same as Tailwind CSS 'lg'
        lg: 1280, // Same as Tailwind CSS 'xl'
        xl: 1536, // Same as Tailwind CSS '2xl'
      },
    },
  });
const Sidebar = ({ selectedCategory, setSelectedCategory }) => 

{
  const { theme } = useContext(ThemeContext);
return(
    <ThemeProvider theme={themes}>
    <Stack className='my-2'
    direction={{xs:'row', sm: 'column' }}
    position="sticky"
      sx={{
        overflowY: {xs:"auto", md:"hidden"},
        height: { xs: "auto", md: "auto" },
      }}
    >
      {Categories.map((category) => (
        <button onClick={()=>setSelectedCategory(category.name)}
        className='category-btn dark:text-white'
          style={{
            background:category.name===selectedCategory && '#FC1503',
            color:category.name===selectedCategory && '#FFF'
          }}
          key={category.name}
        >
          <span style={{color:category.name===selectedCategory?"white":"red"}} className='mr-3'>
            {category.icon}
          </span>
          <span style={{opacity:category.name===selectedCategory?'1':'0.8'}}>
            {category.name}
          </span>
        </button>
      ))}
       <Typography variant='body2' className={`copyright font-bold ${theme?'text-yellow-50':'text-black'}`}>
          Copyright 2023 VF Media
        </Typography>
    </Stack>
    </ThemeProvider>
  );
}
export default Sidebar
