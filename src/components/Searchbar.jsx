import React, { useState } from 'react'
import { Paper,IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'
const Searchbar = () => {
  const [searchterm,setSearchterm]=useState('')
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
      if(searchterm){
        navigate(`/search/${searchterm}`);
        setSearchterm('');
      }
  }
  return (
    <div>
      <Paper elevation={3} component='form' className='flex sm:w-full w-4/5 sm:ml-0 ml-2' onSubmit={handlesubmit}>
        <input value={searchterm} placeholder='Search...'  onChange={(e) => setSearchterm(e.target.value)}
        className='outline-none  sm:p-2 sm:w-full w-4/5  rounded-3xl ml-2'></input>
        <IconButton type='submit' >
            <SearchIcon className='text-red-800 text-xs  sm:text-lg'/>
        </IconButton>
      </Paper>
    </div>
  )
}

export default Searchbar
