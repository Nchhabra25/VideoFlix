import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../assets/Themebtn'
import { useContext } from 'react'
import {demoProfilePicture} from '../assets/Utils'
const ChannelCard = ({channelDetail,marginTop}) => {
    const { theme } = useContext(ThemeContext);
  
  return (

    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }} >
            <CardMedia id='card-img'
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
            />
            <Typography variant="h6" className={`${theme ? 'text-white' : 'text-black'}`}>
                {channelDetail?.snippet?.title}{' '}
                <CheckCircleIcon sx={{ fontSize: '14px', ml: '5px' }} className={`${theme ? 'text-white' : 'text-black'}`} />
            </Typography>
            {channelDetail?.statistcs?.subscriberCount && (
                <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }} className={`${theme ? 'text-white' : 'text-black'}`}>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                </Typography>
            )}
        </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard
