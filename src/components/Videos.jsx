import { Stack, Box } from "@mui/system";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ video, direction }) => {
  if(!video?.length) return <Loader />
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {video.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
