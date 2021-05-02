import React from "react";
import { Container } from 'react-bootstrap';
import Comments from '../Comments/comments'
const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>
     
    </div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Container>
    <div>
      <div>
        <iframe id="ytplayer" type="text/html" width= "100%" height="360" src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div>
        <h4 id='selectedVidTitle'>{video.snippet.title}</h4>
        <p id='selectedVidDesc'>{video.snippet.description}</p>
      </div>
    </div>
                <Comments video={video.id.videoId}/>
              
    </Container>
  );
};
export default VideoPlayer;