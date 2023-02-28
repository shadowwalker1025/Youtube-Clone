import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelCard, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  // debugger;
  console.log(channelDetails, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,116,1) 0%, rgba(25,169,226,1) 79%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "200px",
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-110px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos video={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
