import React, { useEffect } from 'react'
import Themebtn from '../assets/Themebtn'
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar';
import Themebutton from '../assets/Themebutton';
const Navigation = () => {
  return (
    <>
      
      <Stack direction='row' sx={{ position: 'sticky', top: 0,zIndex:50 }} alignItems='center'  className=' bg-slate-200 dark:bg-gray-900 border-b-2 dark:border-gray-200 justify-between w-full p-1'>
        <Link to='/'>
        <div className='flex flex-col justify-center items-center sm:flex-row'>
        <i className='bx bx-video dark:text-white sm:text-4xl text-2xl' ></i>
        <span className='sm:text-3xl text-lg font-bold dark:text-white sm:p-2'>Video<span className='text-red-600'>Flix</span></span>
        </div>
        </Link>
        <Searchbar/>
        <Themebutton/>
      </Stack>
    </>
  )
}

export default Navigation
