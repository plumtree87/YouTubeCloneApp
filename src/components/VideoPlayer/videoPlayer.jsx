import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>
       <h1>Search by Topic or Keywords.</h1>
    </div>;
  }
  console.log('LOOKHERE', video.id.videoId)
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe id="ytplayer" type="text/html" width="640" height="360" src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;