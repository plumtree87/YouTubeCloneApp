import React from 'react';
//import { Container } from 'react-bootstrap';
import SelectedVideo from '../SelectedVideo/SelectedVideo'

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <SelectedVideo key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    
    });

    return <div>
    <card>
    {renderedVideos}
    </card>
   
    </div>;
};
export default VideoList;