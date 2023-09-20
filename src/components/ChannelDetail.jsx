import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import  ChannelCard from "./ChannelCard";
import  Videos from "./Videos";
import {ThemeContext} from '../assets/Themebtn'
import { useContext } from 'react'
import { fetchfromapi } from '../assets/Api';
const ChannelDetail = () => {
  const { theme } = useContext(ThemeContext);
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const {id}=useParams();
    useEffect(()=>{
      fetchfromapi(`channels?part=snippet&id=${id}`)
      .then((data)=>setChannelDetail(data?.items[0]));
      fetchfromapi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>setVideos(data?.items))
    },[id])
  return (
    <>
    <Box minHeight='95vh' className={` ${theme ? 'dark:bg-gray-800' : 'bg-slate-100'}`}>
    <Box >
      <div style={{ background: theme ? 'linear-gradient(90deg, rgba(2,0,36,1) 5%, rgba(11,11,91,1) 36%, rgba(0,212,255,1) 76%)' : 'linear-gradient(90deg, rgba(238,174,202,1) 21%, rgba(206,179,213,1) 62%, rgba(148,187,233,1) 100%)',zIndex:10,height:'200px' }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-115px"/>

      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} gapval={9} align="center"/>
      </Box>
    </Box>
    </>
  )
}

export default ChannelDetail
