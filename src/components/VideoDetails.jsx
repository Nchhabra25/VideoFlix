import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from './Videos'
import { fetchfromapi } from '../assets/Api'
import ReactPlayer from "react-player";
import {ThemeContext} from '../assets/Themebtn'
import { useContext } from 'react'
import Loader from "../assets/Loader";
const VideoDetails = () => {
  const [videodetail,setVideodetail]=useState(null)
  const [videos, setVideos] = useState(null);
  const { theme } = useContext(ThemeContext);
  const {id}=useParams();
  useEffect(()=>{
    fetchfromapi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideodetail(data.items[0]))
    fetchfromapi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  },[id])

  if(!videodetail?.snippet) return <Loader/>;
  
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videodetail;
  return (
    <Box minHeight='95vh' className={`${theme ? 'dark:bg-gray-800' : 'bg-slate-100'}`}>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box className='w-[100%] sticky top-[20px] overflow-hidden'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Typography variant='h5' fontWeight='bold' className={`p-1 ${theme?'text-white':'text-black'}`}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" py={1} px={2} className={` ${theme?'text-white':'text-black'}`}>
            <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'subtitle1',md:'h6'}} className={`font-bold ${theme?'text-white':'text-black'}`}>
                  {channelTitle}
                  <CheckCircleIcon sx={{ml:'5px',fontSize:'12px'}} className={` ${theme ? 'text-gray-300':'text-gray-700'}`}/>
                </Typography>
            </Link>
            <Stack direction='row' gap='20px' alignItems='center'>
              <Typography variant='body1' sx={{opacity:0.8}}>
              {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant='body1' sx={{opacity:0.8}}>
              {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
          </Box>
        </Box>
      
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" gapval={3} align='center'/>
        </Box>
        </Stack>
    </Box>
  )
}

export default VideoDetails
