import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Typography } from '@mui/material'
import {ThemeContext} from '../assets/Themebtn'
import { useContext } from 'react'
import Videos from './Videos'
import { fetchfromapi } from '../assets/Api'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchterm } = useParams();

  useEffect(() => {
    fetchfromapi(`search?part=snippet&q=${searchterm}`)
      .then((data) => setVideos(data.items))
  }, [searchterm]);
    const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Box sx={{flex:2}} className={`overflow-y-auto h-[100%] ${theme ? 'dark:bg-gray-800' : 'bg-slate-100'}`}>
        <Typography variant='h4' fontWeight='bold' mb={2} className={`${theme?'text-white':'text-black'}`}>
          Search Results for <span style={{color:'#F31503'}}>{searchterm}</span>
        </Typography>
        <Videos videos={videos} gapval={2} align="start"/>
      </Box>
    </div>
  )
}

export default SearchFeed
