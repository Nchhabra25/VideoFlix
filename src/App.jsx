import React from 'react'
import Navigation from './components/Navigation'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'
import Themebtn from './assets/Themebtn'
import ScrollToTop from './assets/Scrolltotop.jsx'
const App = () => {
  return (
    <>
    <Themebtn>
      
      <ScrollToTop/>
        <Box>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetails/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='/search/:searchterm' element={<SearchFeed/>}/>
        </Routes>
        </Box>
      </Themebtn>
    </>
  )
}

export default App
