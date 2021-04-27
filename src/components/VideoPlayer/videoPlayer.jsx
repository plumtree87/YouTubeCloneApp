import React from 'react'

const VideoPlayer = (props) => {
    debugger;
    console.log(props.key)
    return (
        <div>
        
           <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${props.key}?autoplay=1/`}
  frameborder="0"></iframe> 

        </div>
    );
}

export default VideoPlayer;