import React from "react";
import { Stack, Box } from "@mui/material";
import  ChannelCard from "./ChannelCard";
import  VideoCard from "./VideoCard";
import Loader from "../assets/Loader";

const Videos = ({ videos, direction, gapval,align}) => {
  if(!videos?.length) return <Loader/>;
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems={align} gap={gapval}>
      {videos && videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;