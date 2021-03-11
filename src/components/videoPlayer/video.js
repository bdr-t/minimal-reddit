import ReactHlsPlayer from "react-hls-player";

const Video = () => {
  return (
    <ReactHlsPlayer
      url="https://proxy-bt.herokuapp.com/https://v.redd.it/pxfpxk0uvam61/HLSPlaylist.m3u8?a=1618067968%2CNWNlYWNlYzQ3NjA2MTRiZDM5MmVmODU0Yzk1MGRmZGUyMTY5NTFkZGY0MDI2ZGMxOTMxZGQ5NTg1NTRjZTk3OQ%3D%3D&amp;v=1&amp;f=sd"
      autoplay={false}
      controls={true}
      width="450px"
      height="auto"
    />
  );
};

export default Video;
