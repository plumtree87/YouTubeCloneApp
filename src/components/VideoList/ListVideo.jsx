import React from 'react';
import SelectedVideo from '../SelectedVideo/SelectedVideo'

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <SelectedVideo key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;