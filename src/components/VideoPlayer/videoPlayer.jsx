import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>
       <h1>Search by topic or keywords</h1>

    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
      <center>
    <div>
      <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360" src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div>
        <h4 id='selectedVidTitle'>{video.snippet.title}</h4>
        <p id='selectedVidDesc'>{video.snippet.description}</p>
      </div>
    </div>
    </center>
    
  );
};

export default VideoPlayer;