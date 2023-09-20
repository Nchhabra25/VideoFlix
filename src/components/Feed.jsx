import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Stack,Typography,ThemeProvider, createTheme } from '@mui/material'
import {ThemeContext} from '../assets/Themebtn'
import { useContext } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchfromapi } from '../assets/Api'
const Feed = () => {
  const[selectedCategory,setSelectedCategory]=useState('New')
  const [videos, setVideos] = useState(null);
  useEffect(()=>{
    setVideos(null);
    fetchfromapi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);
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
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes}>
    <Stack direction={{ sm: 'row', xs: 'column' }} 
     className={`flex flex-row  ${theme ? 'dark:bg-gray-800' : 'bg-slate-100'}`}>
      <Box tabIndex="-1" position={{md:'sticky' ,xs:'relative'}} sx={{px:{sx:0, md:2}, }} className={` m-3 ml-0 mt-0 md:w-[17%] h-auto md:h-[140vh] ${theme?'md:border-r-2 md:border-b-2 md:border-gray-600':'md:border-r-2 md:border-b-2 md:border-gray-300'} ${theme ? 'dark:bg-gray-800' : 'bg-slate-100'} `}>
        
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box sx={{flex:2}} className='overflow-y-auto h-auto' id='feedbox'>
        <Typography variant='h4' fontWeight='bold' mb={2} className={`${theme?'text-white':'text-black'}`}>
          {selectedCategory} <span style={{color:'#F31503'}}>Vidoes</span>
        </Typography>
        <Videos videos={videos} gapval={2} align="start"/>
      </Box>
    </Stack>
    </ThemeProvider>
  );
};

export default Feed;
