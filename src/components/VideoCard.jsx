import React from 'react'
import {Link} from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia,createTheme,ThemeProvider } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {demoThumbnailUrl,demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle,demoProfilePicture} from '../assets/Utils'
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
  
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const { theme } = useContext(ThemeContext);
   
  return (
    
    <ThemeProvider theme={themes}>
    <Card sx={{width:'320px'}} id='vid-card'>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:358,height:180}}/>
      </Link>
      <CardContent className='bg-gray-600 dark:bg-gray-300 h-[106px]'>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' className={`${theme ? 'text-black' : 'text-white'}`}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId?`/video/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant='subtitle1' fontWeight='bold' className={`${theme ? 'text-gray-800' : 'text-gray-400'}`}>
            {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{ml:'5px',fontSize:'12px'}} className={`${theme ? 'text-gray-700' : 'text-gray-300'}`}/>
            </Typography>
        </Link>
      </CardContent>
    </Card>
    </ThemeProvider>
  )
}

export default VideoCard
